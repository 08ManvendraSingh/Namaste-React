import { FOOD_IMG_URL } from "../utils/constant";

const ItemCards = ({data}) => {

  const{imageId,ribbon,name,price,description,isVeg}=data?.card?.info;  

  return (
    <div className="food_card">
        <div className="food_content">
          <div className="food_veg_box">
            {isVeg===1?<span>🟢</span>:<span>🔴</span>}
            {ribbon?.text && <h3>⭐ {ribbon?.text}</h3>}
          </div>
          <div className="food_name">
            <h3>{name}</h3>
          </div>
          <div className="food_price">
            <h3>₹{price/100}</h3>
          </div>
          <div className="food_desc">
            {description}
          </div>
        </div>
        <div className="food_img">
          {imageId && <img src={FOOD_IMG_URL+imageId} alt="" />}
        </div>
    </div>
  )
}

export default ItemCards;