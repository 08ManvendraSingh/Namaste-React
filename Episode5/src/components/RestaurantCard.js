import { RESTAURANT_IMG_URL } from "../utils/constant";

const RestaurantCard=(props)=>{

    const{name,cuisines,avgRating,areaName,cloudinaryImageId}=props?.resData?.info;

    return(
        <div className="resCard">
            <img src={RESTAURANT_IMG_URL+cloudinaryImageId} alt="" />
            <div className="resCard_content">
                <h3>{name}</h3>
                <h4>⭐ {avgRating}</h4>
                <p>{cuisines.join(', ')}</p>
                <h6>{areaName}</h6>
            </div>
        </div>
    )
}

export default RestaurantCard;