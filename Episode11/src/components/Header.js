import { LOGO_IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div className="w-full px-28 py-3 bg-white shadow-lg flex justify-between items-center fixed z-10 text-[#222]">
            <div className="w-8">
                <img className="w-full" src={LOGO_IMG_URL} alt="" />
            </div>
            <div className="">
                <ul className="flex gap-8">
                    <li className="hover:text-orange-600 transition-all"><Link to='/'>Home</Link></li>
                    <li className="hover:text-orange-600 transition-all"><Link to='/support'>Help</Link></li>
                    <li className="hover:text-orange-600 transition-all"><Link to='/contact'>Contact</Link></li>
                    <li className="hover:text-orange-600 transition-all"><Link to='/cart'>Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;