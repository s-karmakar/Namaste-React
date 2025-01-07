import React from "react";
import ReactDOM from "react-dom";
import ResturantCard from "./ResturantCard";
// import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variables > keeps the track of the data that is changing within the component
  //   const [listofResturants, setlistofResturants] = useState(resList);
  const [listofResturants, setlistofResturants] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect Called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.585698&lng=88.443614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setlistofResturants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  if (listofResturants.length === 0) {
    console.log("Loading...");

    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (eachRstObj) => eachRstObj.info.avgRating >= 4.5
            );
            setlistofResturants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resturant-cards-container">
        {/* Passing PROPS => passing arguments to a fn */}
        {/* <ResturantCard resData={resList[0]} /> */}
        {listofResturants.map((eachRstObj) => (
          <ResturantCard key={eachRstObj?.info?.id} resData={eachRstObj} /> // this Name  resData should be the same as the name of the prop in the ResturantCard component..
          // this eachRstObj is the current object in the array that we are iterating over same as resList[0] in the above comment
          // key is a special prop that is used by react to identify each element in the list uniquely..
        ))}
      </div>
    </div>
  );
};

export default Body;
