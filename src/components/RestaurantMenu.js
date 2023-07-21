import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import Menu from "./Menu";

const RestaurantMenu =  () => {
    const {id} = useParams();

    const [restaurant,setRestauraunt] = useRestaurant(id);

    const itemCard = restaurant?.cards[3].groupedCard.cardGroupMap.REGULAR.cards;
    const details = restaurant?.cards[0]?.card?.card?.info;

    return !restaurant ? (
        <Shimmer />
      ) : (
        
        <div className="menu">
          <div>
            <h1>Restaurant id: {id}</h1>
            <h2>
            {(details.name)}</h2>
            <div className="menu-img"><img src={IMG_CDN_URL + details?.cloudinaryImageId} /> </div>
            <h3>{details?.area}</h3>
            <h3>{details?.city}</h3>
            <h3>{details?.avgRating} stars</h3>
            <h3>{details?.costForTwoMsg}</h3>
          </div>
          <div>
            <h1>Menu</h1>
            <ul>
              {Object.values(itemCard).map((item) => (
                  <Menu menu = {item}/>
              ))}
            </ul>
          </div>
        </div>
      );
    };

export default RestaurantMenu;

// itemcard = foodItem.card.info.name
// const itemcards = Menu?.card?.card?.itemCards;
// foodItem={item} // itemcard