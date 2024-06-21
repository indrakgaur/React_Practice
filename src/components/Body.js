import RestuarnantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/userOnlineStatus";
import Shimmer from "./Shimmer";
import userOnlineStatus from "../utils/userOnlineStatus";

const Body = () => {
  const [listofRestaurnant, setListofRestuarant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  let allRestaurants;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    setListofRestuarant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  let onlineStatus = userOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false) {
    return (
      <div>
        <h1>Please check your internet connection</h1>
        <h2>Oops!</h2>
      </div>
    );
  }

  if (listofRestaurnant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listofRestaurnant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filteredRestaurant);
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            let filteredList = listofRestaurnant.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setListofRestuarant(filteredList);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className='res-container'>
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            <RestuarnantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
