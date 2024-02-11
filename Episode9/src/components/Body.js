import {useState} from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';
import useRestaurantList from '../utils/useRestaurantList';

const Body=()=>{
    
    const [searchText,setSearchText]=useState("");
    const [listOfRestaurant,filterdRestaurant,setFilterRestaurant]=useRestaurantList();

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