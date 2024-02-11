import {COUPON_IMG_URL} from '../utils/constant';

const MenuCoupon = ({data}) => {

    const{couponCode,description,header,logoBottom}=data?.info;

  return (
    <div className="coupon_card">
        <div className="coupon_type">
            <img src={COUPON_IMG_URL+logoBottom} alt="" />
            <span>{header}</span>
        </div>
        <div className="coupon_code">
            {couponCode} | {description}
        </div>
    </div>
  )
}

export default MenuCoupon