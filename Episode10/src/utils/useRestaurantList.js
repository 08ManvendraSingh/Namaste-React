import {useState,useEffect} from 'react';
import {SWIGGY_RESTAURANT_LIST_API} from './constant';

const useRestaurantList = () => {

  const [listOfRestaurant,setListOfRestaurant]=useState([]);
  const [filterdRestaurant,setFilterRestaurant]=useState([]); 
  
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
      const data=await fetch(SWIGGY_RESTAURANT_LIST_API);
      const json=await data.json();
      setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log(json);
  }

  return [listOfRestaurant,filterdRestaurant,setFilterRestaurant];
}

export default useRestaurantList