import { LOGO_IMG_URL } from "../utils/constant";

const Header=()=>{
    return(
        <div id="header">
            <div className="logo">
                <img src={LOGO_IMG_URL} alt="" />
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;