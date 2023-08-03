import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { CiDiscount1 } from "react-icons/ci";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";
import logo from "../assets/img/foodie.jpg"



const OnlineBar = () => {
  const isOnline = useOnline();
  return isOnline ? (
    <div className="px-1 bg-green-400">
      <p>You are Online!</p>
    </div>
  ) : (
    <div className="px-1 bg-red-500">
      <p>You are Offline! Please check your internet connection.</p>
    </div>
  );
};

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        className="w-16 h-16"
        alt="logo"
        src={logo}
      />
    </Link>
  );
};

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div>
      <ul className="flex justify-between">

        <li className="px-2 ml-4">
          <link
            type="image/png"
            sizes="16x16"
            rel="icon"
            href=".../icons8-discount-16.png"
          />

          <div className="flex">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="mr-2">
                <CiDiscount1 />
              </div>
            </IconContext.Provider>
            Offers
          </div>
        </li>

        <li className="px-2 ml-4">
          <Link to={"/cart"}>
            <div className="flex">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <FiShoppingCart />
                </div>
              </IconContext.Provider>
              <p>Cart -{cartItems.length}</p>
            </div>
          </Link>
        </li>
        <li className="px-2 ml-4">
          <div className="flex">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="mr-2">
                <FiUser />
              </div>
            </IconContext.Provider>
            Akshay
          </div>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {

  return (
    <>
      <OnlineBar />
      <div className="flex justify-between items-center p-2 font-c font-semibold shadow-lg border">
        <Logo />
        <Navbar />
      </div>
    </>
  );
};

export default Header;