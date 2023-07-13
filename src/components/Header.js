// Way to add CSS in React
// It is an object in js

import { useState } from "react";
import Logo from "../assets/img/foodie.jpg";
import { Link } from "react-router-dom";

const styleLogo = {
    width:"70px",
}
const Title = () => {
    return (
      <img
        alt="Logo"
        src={Logo}
        style = {styleLogo}
      />
    );
};

const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to = "/">Home </Link></li>
            <li><Link to = "/about">About Us</Link></li>
            <li><Link to = "/contact">Contact Us </Link></li>
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