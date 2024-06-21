import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import userOnlineStatus from "../utils/userOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  return (
    <div className='header'>
      <div className='logo'>
        <img src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Online Status : {userOnlineStatus() ? "✅" : "🔴"}</li>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className='login'
            onClick={() => {
              setBtnName("logout");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
