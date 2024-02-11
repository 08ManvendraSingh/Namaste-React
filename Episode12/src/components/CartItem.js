import { FOOD_IMG_URL } from "../utils/constant"
const CartItem = ({data}) => {

  const {imageId,name,defaultPrice,price,ribbon,itemAttribute}=data?.card?.info; 

  return (
    <div className='w-6/12 mx-auto flex gap-2 border border-[#aaa] mb-4 rounded-lg p-4'>
      <div className='w-2/12'>
      {!imageId?'':<img className="w-full h-full object-cover" alt='product_img' src={FOOD_IMG_URL+imageId}/>}
      </div>
      <div className="w-8/12">
        <div>
          {itemAttribute?.vegClassifier==="VEG"?<span>🟢</span>:<span>🔴</span>}  
          {!ribbon.text?'':<span>⭐{ribbon?.text}</span>}
        </div>
        <h3>{name}</h3>
        {!defaultPrice?(!defaultPrice?<h5>₹ {price/100}</h5>:<h5><span>₹{price/100}</span> ₹{finalPrice/100}</h5>)  :(<h5>₹ {defaultPrice/100}</h5>)}
      </div>
      {/* <button id='delete' onClick={()=>deleteCartItem()}>❌</button> */}
    </div>
  )
}

export default CartItem;