import { useDispatch } from "react-redux";
import { FOOD_IMG_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemCards = ({data}) => {

  const dispatch=useDispatch();

  const handleAddItem=(data)=>{
    dispatch(addItem(data));
  }
  const{imageId,ribbon,name,price,description,isVeg,defaultPrice}=data?.card?.info;  

  return (
    <div className="my-5 flex justify-between border-b border-[#d3d3d3]">
        <div className="max-w-[90%]">
          <div className="flex gap-2 mb-2 text-xs text-[#EE9C00]">
            {isVeg===1?<span>🟢</span>:<span>🔴</span>}
            {ribbon?.text && <h3 className="font-semibold">⭐ {ribbon?.text}</h3>}
          </div>
          <div className="mb-2 text-[#3e4152] font-medium">
            <h3>{name}</h3>
          </div>
          <div className="mb-3 text-[#3e4152] text-sm font-medium">
            {price?<h3>₹{price/100}</h3>:<h3>₹{defaultPrice/100}</h3>}
          </div>
          <div className="text-[#282c3f73] text-sm">
            {description}
          </div>
        </div>
        <div className="min-w-[112px] h-28 ml-4 relative">
          {imageId && <img className="w-full h-full object-cover" src={FOOD_IMG_URL+imageId} alt="" />}
          <button onClick={()=>handleAddItem(data)} className="bg-white border border-green-400 p-2 absolute top-20 left-[50%] translate-x-[-50%]">ADD</button>
        </div>
    </div>
  )
}

export default ItemCards;