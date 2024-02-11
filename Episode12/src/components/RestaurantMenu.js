import { useState } from "react";
import Shimmer from "./Shimmer";
import MenuCoupon from "./MenuCoupon";
import MenuList from "./MenuList";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantMenu = () => {

  const [showIndex,setShowIndex]=useState(1);
  const {id}=useParams();  
  const restaurantInfo=useRestaurantInfo(id);

  if(restaurantInfo.length===0){return <Shimmer/>}

  const{name,areaName,avgRating,cuisines,totalRatingsString,sla,costForTwoMessage}=restaurantInfo?.cards[0]?.card?.card?.info;
  const{offers}=restaurantInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;
  const{cards}=restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div className="w-full px-28 py-8 relative top-20">
        <div className="px-[15%]">
            <div className="py-5 flex justify-between items-center border-b border-dotted border-[#aaa]">
                <div>
                    <h3 className="mb-2 text-[#282828] text-lg font-bold">{name}</h3>  
                    <h5 className="text-[#7E808C] text-sm mb-1 font-normal">{cuisines.join(', ')}</h5>
                    <h5 className="text-[#7E808C] text-sm mb-1 font-normal">{areaName}</h5>
                </div>
                <div className="p-1 border border-[#aaa] rounded-md text-center">
                    <div className="py-2 border-b border-[#aaa] text-[#3d9b6d] font-bold">⭐ {avgRating}</div>
                    <div className="py-2 text-[#8B8D97] font-bold text-xs">{totalRatingsString}</div>
                </div>
            </div>
            <div className="py-5 flex items-center gap-6 text-[#282828] font-bold">
                <div>🕖 {sla?.deliveryTime} MINS</div>
                <div>₹ {costForTwoMessage}</div>
            </div>
            <div className="overflow-x-scroll flex gap-4 mb-4 scrollbar-hide">
                {offers.map((x)=><MenuCoupon key={x.info.offerIds} data={x}/>)}
            </div>
            {cards.map((x,index)=>x?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
                <div className="res_menu_list">
                    <MenuList key={x?.card?.card?.title} data={x} showItem={index=== showIndex ?true:false} setShowIndex={()=>setShowIndex(index)}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default RestaurantMenu