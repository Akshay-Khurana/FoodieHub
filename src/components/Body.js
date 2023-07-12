import RestaurantCard from "./RestaurantCard"; // Default Import
import { useState, useEffect } from "react"; // Named Import
import Shimmer from "./Shimmer";

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
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h1>No match found</h1>;

  return filteredRestaurants.length === 0 ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        {/* <h1> {searchClicked}</h1> */}
        {/* <button
          className="search-btn"
          onClick={() => {
            searchClicked === "true"
              ? setSearchClicked("false")
              : setSearchClicked("true");
          }}
        >
          Search
        </button> */}
        <button
          className="search-btn"
          onClick={() => {
            // need to filter out the restaurants
            const data = filterData(searchInput,allRestaurants);
            // set the restaurants needed to be displayed
            setFilteredRestaurants(data);
          }}
        >Search</button>
      </div>
      <div className="restaurant-list">
        {
          // Using map to loop through each restaurant
          // and spread operator to destructure my data
        }
        {filteredRestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>;
        })}
      </div>
    </>
  );
};

export default Body;
