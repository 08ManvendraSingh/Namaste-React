import { LOGO_IMG_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header=()=>{
    return(
        <div id="header">
            <div className="logo">
                <img src={LOGO_IMG_URL} alt="" />
            </div>
            <div className="navItems">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;