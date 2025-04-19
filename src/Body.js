import React from "react";
import ReactDOM from "react-dom";
import ResturantCard, { withTopRatedLabel } from "./ResturantCard";
// import { resList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  // Local State Variables > keeps the track of the data that is changing within the component
  //   const [listofResturants, setlistofResturants] = useState(resList);
  const [listofResturants, setlistofResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const onlineStatus = useOnlineStatus();
  console.log(listofResturants);

  const ResturantCardWithTopRatedLabel = withTopRatedLabel(ResturantCard);

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

  // check online status

  // if (onlineStatus === true) {
  //   return <h1>opps. Looks like your internet is not working</h1>;
  // }

  //conditional rendering
  //   if (listofResturants.length === 0) {
  //     console.log("Loading...");

  //     return <Shimmer />;
  //   }

  // conditional rendering using ternary operator - standard way
  return listofResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="search-container p-6 flex flex-col md:flex-row justify-center items-center gap-4 bg-white/10 backdrop-blur-md shadow-lg rounded-lg mx-4 mt-4 border border-white/20">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="search-input border-2 border-white/30 bg-white/10 text-white rounded-full px-6 py-2 w-80 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 placeholder-white/70"
              placeholder="Search for Restaurants..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="search-btn px-6 py-2 bg-gradient-to-r from-orange-500/90 to-amber-500/90 text-white rounded-full hover:from-orange-600/90 hover:to-amber-600/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
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
            className="filter-btn px-6 py-2 bg-gradient-to-r from-amber-400/90 to-orange-400/90 text-white rounded-full hover:from-amber-500/90 hover:to-orange-500/90 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            onClick={() => {
              const filteredList = listofResturants.filter(
                (eachRstObj) => eachRstObj.info.avgRating >= 4.5
              );
              setFilteredResturants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="resturant-cards-container flex flex-wrap justify-center gap-8 p-8">
          {filteredResturants.map((eachRstObj) => (
            <Link
              to={`/resturants/${eachRstObj?.info?.id}`}
              key={eachRstObj?.info?.id}
              className="transform transition-all duration-300 hover:scale-105 hover:rotate-1"
            >
              {eachRstObj?.info?.avgRating > 4.5 ? (
                <ResturantCardWithTopRatedLabel resData={eachRstObj} />
              ) : (
                <ResturantCard resData={eachRstObj} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
