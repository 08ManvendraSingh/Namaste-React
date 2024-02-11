import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuCoupon from "./MenuCoupon";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

  const {id}=useParams();  
  const [restaurantInfo,setRestaurantInfo]=useState([]);  

  useEffect(()=>{
    fetchData();
  },[]);
  
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.9124336&lng=75.7872709&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    setRestaurantInfo(json.data);
    console.log(json.data);
  }

  if(restaurantInfo.length===0){return <Shimmer/>}

  const{name,areaName,avgRating,cuisines,totalRatingsString,sla,costForTwoMessage}=restaurantInfo?.cards[0]?.card?.card?.info;
  const{offers}=restaurantInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const{cards}=restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div id="restaurant_menu">
        <div id="restaurant_info_container">
            <div className="about_res">
                <div className="about_res_name">
                    <h3>{name}</h3>  
                    <h5>{cuisines.join(', ')}</h5>
                    <h5>{areaName}</h5>
                </div>
                <div className="about_res_rating">
                    <div className="about_res_rating_top">⭐ {avgRating}</div>
                    <div className="about_res_rating_bottom">{totalRatingsString}</div>
                </div>
            </div>
            <div className="about_time_cost">
                <div>🕖 {sla?.deliveryTime} MINS</div>
                <div>₹ {costForTwoMessage}</div>
            </div>
            <div className="about_res_coupon">
                {offers.map((x)=><MenuCoupon key={x.info.offerIds} data={x}/>)}
            </div>
            {cards.map((x)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
                <div className="res_menu_list">
                    <MenuList data={x}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default RestaurantMenu