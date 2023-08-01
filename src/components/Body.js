import RestaurantCard from "./RestaurantCard"; // Default Import
import { useState, useEffect } from "react"; // Named Import
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";

// Hooks - Functions in js


function filterData(searchInput, restaurants){
    const filteredData = restaurants.filter((restaurant)=>{
        return restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase());
    })
    return filteredData;

}

const Body = () => {
  const [searchInput, setSearchInput] = useState(''); // return an array [variable,function to update the state of the variable]

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  // const [searchClicked,setSearchClicked] = useState("false");

  // useEffect(()=>{
  //   console.log("calling Effect");
  // },[searchInput]); // call everytime when my searchInput Changes Only.


  useEffect(()=>{
    getRestaurants();
  },[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  
  const isOnline = useOnline();

  if (!isOnline){
    return <h1> Offline, please check your internet connection!!</h1>
  }

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h1>No match found</h1>;
  console.log(filteredRestaurants.length);
  return filteredRestaurants.length === 0 ? <Shimmer></Shimmer> : (
    <>
      <div className=" flex justify-end items-center p-2">
        <input
          type="text"
          className="w-52 h-10 p-2 bg-orange-100"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-orange-400 rounded-lg "
          onClick={() => {
            // need to filter out the restaurants
            const data = filterData(searchInput,allRestaurants);
            // set the restaurants needed to be displayed
            setFilteredRestaurants(data);
          }}
        >Search</button>
      </div>
      <div className="flex flex-col flex-wrap sm:flex-row">
        {
          // Using map to loop through each restaurant
          // and spread operator to destructure my data
        }
        {filteredRestaurants.map((restaurant) => {
          return (
          <Link to={"/restaurant/" + restaurant?.info?.id}>
            <RestaurantCard {...restaurant.info} key = {restaurant.info.id}/>
          </Link>
          );

        })}
      </div>
    </>
  );
};

export default Body;
