import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {

  const cartItems=useSelector((store)=>store.cart.items);

  const dispatch=useDispatch();

  const handleClear=()=>{
    dispatch(clearCart());
  }

  return (
    <div className="w-full px-28 py-8 relative top-20">
      <div className="w-full mb-4">
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="w-full">
        {cartItems.map((x)=><CartItem data={x}/>)}
      </div>
    </div>
  )
}

export default Cart;