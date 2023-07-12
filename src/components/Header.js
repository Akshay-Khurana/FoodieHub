// Way to add CSS in React
// It is an object in js

import { useState } from "react";

const styleLogo = {
    width:"60px",
}
const Title = () => {
    return (
      <img
        alt="Logo"
        src="https://10619-2.s.cdn12.com/rests/original/340_328462255.jpg"
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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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