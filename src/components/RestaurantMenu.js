import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RES_URL } from "../utils/constants";
import useRestaurantInfo from "../utils/userRestaurantInfo";

const RestuarantMenu = () => {
  const { id } = useParams();

  const resInfo = useRestaurantInfo(id);
  console.log(resInfo, "custom hooks");

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  //console.log(itemCards);

  return (
    <div className='Menu'>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestuarantMenu;
export const RES_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=";
