import RestaurantCard from "./RestaurantCard"; // Default Import
import { restaurantList } from "../config";
import { useState } from "react"; // Named Import

// Hooks - Functions in js


function filterData(searchInput, restaurants){
    const filteredData = restaurants.filter((restaurant)=>{
        return restaurant.info.name.includes(searchInput);
    })
    return filteredData;

}

const Body = () => {
  const [searchInput, setSearchInput] = useState(''); // return an array [variable,function to update the state of the variable]

  // const [searchClicked,setSearchClicked] = useState("false");

  const [restaurants, setRestaurant] = useState(restaurantList);
  return (
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
            const data = filterData(searchInput,restaurants);
            {console.log(data);}
            // set the restaurants needed to be displayed
            setRestaurant(data);
          }}
        >Search</button>
      </div>
      <div className="restaurant-list">
        {
          // Using map to loop through each restaurant
          // and spread operator to destructure my data
        }
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
