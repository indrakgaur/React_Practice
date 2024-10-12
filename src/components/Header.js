import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import userOnlineStatus from "../utils/userOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setBtnName] = useState("Login");

  return (
    <div className='flex justify-between shadow-lg mb-1'>
      <div className='logo'>
        <img className='w-56' src={LOGO_URL} />
      </div>
      <div className='flex items-center'>
        <ul className='flex p-4 m-4'>
          <li className='px-4'>
            Online Status : {userOnlineStatus() ? "✅" : "🔴"}
          </li>
          <li className='px-4'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4'>Cart</li>
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
