import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);

  const restaurant = useRestaurant(id);

  const itemCards = restaurant?.cards[3].groupedCard.cardGroupMap.REGULAR.cards;
  const details = restaurant?.cards[0]?.card?.card?.info;
  console.log(restaurant);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div
      data-testId="Menu"
      className="max-w-screen-md min-h-[90%] mt-0 mx-auto my-auto mb-0"
    >
      <div className="">
        <p className="text-xs mt-2">
          Home / {details.city} / {details.areaName} / {details.name}{" "}
        </p>
      </div>
      <div className="flex justify-between px-4 py-4 pt-9 pb-9 border-solid border-b-2">
      <div className="">
            <h1 className="font-bold text-2xl">{details.name}</h1>

            <p className="text-sm">{details.cuisines.join(", ")}</p>
            <p className="text-sm">
              {details.areaName}, {details.sla.lastMileTravel} km
            </p>
          </div>
          <div className="border-slate-200 border rounded p-1 text-xs text-center h-14 mt-auto mb-auto flex-col">
            <div className="border-b-2 p-1">{details.avgRating} ⭐</div>
            <div className="p-1">{details.totalRatingsString}</div>
          </div>
      </div>


      <div className="px-4 py-4 pt-9 pb-9">
        <h1 className="text-2xl font-bold ">Menu</h1>
        <div>
          {itemCards.map((item, index) => (
            <>
              <Menu menu={item}></Menu>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

// itemcard = foodItem.card.info.name
// const itemcards = Menu?.card?.card?.itemCards;
// foodItem={item} // itemcard
