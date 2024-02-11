import {COUPON_IMG_URL} from '../utils/constant';

const MenuCoupon = ({data}) => {

    const{couponCode,description,header,logoBottom}=data?.info;

  return (
    <div className="min-w-[200px] px-3 py-2 border border-[#aaa] rounded-lg">
        <div className="flex items-center gap-3 mb-2">
            <img src={COUPON_IMG_URL+logoBottom} alt="" />
            <span className='whitespace-nowrap text-[#686b78] font-bold text-sm'>{header}</span>
        </div>
        <div className="text-[#93959f] whitespace-nowrap overflow-hidden font-bold text-xs">
            {couponCode} | {description}
        </div>
    </div>
  )
}

export default MenuCoupon