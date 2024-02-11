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
        <div className='w-full relative top-20 px-28 py-8'>
            <div className="flex gap-4 justify-between items-center mb-6">
                <div>
                    <input className='px-3 py-2 border border-[#aaa] rounded-l-md' type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                    <button className='px-3 py-2 border border-[#aaa] rounded-r-md outline-none' onClick={()=>{
                        const searchFilter=listOfRestaurant.filter((x)=>x.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterRestaurant(searchFilter);
                        }}>Search</button>
                </div>
                <div>
                    <button className='px-3 py-2 border border-[#aaa] rounded-md outline-none cursor-pointer' onClick={()=>resFilter()}>Top Rated Restaurant</button>
                </div>
            </div>
            <div className="w-full flex flex-wrap gap-5">
                {filterdRestaurant.map((x)=><Link key={x.info.id} className='w-[21%] mb-6 text-[#222] rounded-xl hover:scale-90 transition-all' to={"/restaurant/"+x.info.id}><RestaurantCard resData={x}/></Link>)}
            </div>
        </div>
    )
}

export default Body;