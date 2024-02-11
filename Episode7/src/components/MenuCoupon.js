const MenuCoupon = ({data}) => {

    const{couponCode,description,header,logoBottom}=data?.info;

  return (
    <div className="coupon_card">
        <div className="coupon_type">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/"+logoBottom} alt="" />
            <span>{header}</span>
        </div>
        <div className="coupon_code">
            {couponCode} | {description}
        </div>
    </div>
  )
}

export default MenuCoupon