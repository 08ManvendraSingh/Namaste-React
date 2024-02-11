import { RESTAURANT_IMG_URL } from "../utils/constant";

const RestaurantCard=(props)=>{

    const{name,cuisines,avgRating,areaName,cloudinaryImageId}=props?.resData?.info;

    return(
        <div>
            <img className="w-full h-44 object-cover rounded-xl" src={RESTAURANT_IMG_URL+cloudinaryImageId} alt="" />
            <div className="w-full px-2 py-3">
                <h3 className="whitespace-nowrap overflow-ellipsis overflow-x-hidden">{name}</h3>
                <h4 className="mb-2">⭐ {avgRating}</h4>
                <p className="mb-2 whitespace-nowrap overflow-ellipsis overflow-x-hidden">{cuisines.join(', ')}</p>
                <h6 className="text-lg">{areaName}</h6>
            </div>
        </div>
    )
}

export default RestaurantCard;