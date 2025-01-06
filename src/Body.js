import React from "react";
import ReactDOM from "react-dom";
import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="resturant-cards-container">
        {/* Passing PROPS => passing arguments to a fn */}
        {/* <ResturantCard resData={resList[0]} /> */}
        {resList.map((eachRstObj) => (
          <ResturantCard key={eachRstObj?.info?.id} resData={eachRstObj} /> // this Name  resData should be the same as the name of the prop in the ResturantCard component..
          // this eachRstObj is the current object in the array that we are iterating over same as resList[0] in the above comment
          // key is a special prop that is used by react to identify each element in the list uniquely..
        ))}
      </div>
    </div>
  );
};

export default Body;
