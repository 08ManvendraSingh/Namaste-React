import { useEffect, useState } from "react";
import {SWIGGY_RESTAURANT_INFO_API} from './constant';

const useRestaurantInfo = (id) => {

  const [restaurantInfo,setRestaurantInfo]=useState([]);  

  useEffect(()=>{
    fetchData();
  },[]);
  
  const fetchData=async()=>{
    const data=await fetch(SWIGGY_RESTAURANT_INFO_API+id);
    const json=await data.json();
    setRestaurantInfo(json.data);
    console.log(json.data);
  }  

  return restaurantInfo;
}

export default useRestaurantInfo