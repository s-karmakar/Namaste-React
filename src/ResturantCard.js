import React from "react";
import { CDN_URL } from "./utils/constants";

const ResturantCard = (props) => {
  const { resData } = props; // Destructuring
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    resData?.info; // Destructuring more inside the destructured object though we could do the same in very first place like this => const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = props.resData.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="resturant-logo"
      />
      <h2>{name}</h2>
      <h4>Rating:{avgRating}</h4>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResturantCard;
