import {useState,useEffect} from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';

const Body=()=>{

    const [listOfRestaurant,setListOfRestaurant]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [filterdRestaurant,setFilterRestaurant]=useState([])

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    }

    const resFilter=()=>{
        const filterdList= listOfRestaurant.filter((x)=>x.info.avgRating>4);
        return setFilterRestaurant(filterdList);
    }

    if(listOfRestaurant.length===0){return <Shimmer/>}

    return(
        <div id="body">
            <div className="searchContainer">
                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button onClick={()=>{
                        const searchFilter=listOfRestaurant.filter((x)=>x.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurant(searchFilter);
                        }}>Search</button>
                </div>
                <div className="filter">
                    <button onClick={()=>resFilter()}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="restaurantContainer">
                {filterdRestaurant.map((x)=><Link to={"/restaurant/"+x.info.id}><RestaurantCard key={x.info.id} resData={x}/></Link>)}
            </div>
        </div>
    )
}

export default Body;