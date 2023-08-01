// Way to add CSS in React
// It is an object in js

import { useState } from "react";
import Logo from "../assets/img/foodie.jpg";
import { Link } from "react-router-dom";


const Title = () => {
    return (
      <img
        className="w-20 h-16 p-2"
        alt="Logo"
        src={Logo}
      />
    );
};

const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
    return (
      <div className="h-28 flex flex-col items-center justify-center md:flex-row md:justify-between md:h-16 shadow p-2">
        <Title />
        <div className="flex items-center mt-2 md:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="px-2"><Link to = "/">Home </Link></li>
            <li className="px-2"><Link to = "/about">About Us</Link></li>
            <li className="px-2"><Link to = "/contact">Contact Us </Link></li>
            <li className="px-2"><Link to = "/instamart"> Instamart</Link></li>
            <li>Cart</li>

          </ul>
        </div>
        {(isLoggedIn) ? <button onClick={()=>{
          setIsLoggedIn(false)
        }}> Log In </button> : <button onClick={()=>{
          setIsLoggedIn(true)
        }}>Log Out </button>}
      </div>
    );
  };

export default Header;