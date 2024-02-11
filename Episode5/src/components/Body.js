import {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import { resObj } from '../utils/constant';

const Body=()=>{

    const [listOfRestaurant,setListOfRestaurant]=useState(resObj);

    const resFilter=()=>{
        const filterdList= resObj.filter((x)=>x.info.avgRating>4);
        return setListOfRestaurant(filterdList);
    }

    return(
        <div id="body">
            <div className="searchContainer">
                <div className="search">
                    <input type="text" />
                    <button>Search</button>
                </div>
                <div className="filter">
                    <button onClick={()=>resFilter()}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="restaurantContainer">
                {listOfRestaurant.map((x)=><RestaurantCard key={x.info.id} resData={x}/>)}
            </div>
        </div>
    )
}

export default Body;