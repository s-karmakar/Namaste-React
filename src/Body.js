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
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
    console.log("useEffect Called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.585698&lng=88.443614&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //main list
    setlistofResturants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    //filtered list > initially same as main list
    setFilteredResturants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(
    //   jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };

  //conditional rendering
  //   if (listofResturants.length === 0) {
  //     console.log("Loading...");

  //     return <Shimmer />;
  //   }

  // conditional rendering using ternary operator - standard way
  return listofResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search for Resturants"
            value={searchValue} // binding the input field with the state variable
            onChange={(e) => {
              setSearchValue(e.target.value);
            }} // updating the state variable with the value of the input field
          />
          <button
            className="search-btn"
            onClick={() => {
              const fltrResturants = listofResturants.filter((eachRstObj) =>
                eachRstObj.info.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              );
              setFilteredResturants(fltrResturants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofResturants.filter(
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
        {filteredResturants.map((eachRstObj) => (
          <ResturantCard key={eachRstObj?.info?.id} resData={eachRstObj} /> // this Name  resData should be the same as the name of the prop in the ResturantCard component..
          // this eachRstObj is the current object in the array that we are iterating over same as resList[0] in the above comment
          // key is a special prop that is used by react to identify each element in the list uniquely..
        ))}
      </div>
    </div>
  );
};

export default Body;
