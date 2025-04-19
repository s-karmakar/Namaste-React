import React from "react";
import { CDN_URL } from "./utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card m-4 p-4 w-72 h-[420px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/20 hover:border-white/40">
      <div className="relative h-48 w-full overflow-hidden rounded-lg group">
        <img
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          src={CDN_URL + cloudinaryImageId}
          alt="restaurant-logo"
        />
        <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500/90 to-amber-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          ⭐ {avgRating}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-white mb-2 truncate hover:text-orange-300 transition-colors duration-300">
          {name}
        </h2>
        <div className="flex flex-wrap gap-1 mb-2">
          {cuisines.slice(0, 3).map((cuisine, index) => (
            <span
              key={index}
              className="text-sm bg-white/10 text-white px-2 py-1 rounded-full hover:bg-white/20 transition-colors duration-300 border border-white/20"
            >
              {cuisine}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center text-sm text-white/80">
          <span className="hover:text-white transition-colors duration-300">
            {costForTwo}
          </span>
          <span className="flex items-center gap-1 hover:text-white transition-colors duration-300">
            🛵 {sla?.deliveryTime} mins
          </span>
        </div>
      </div>
    </div>
  );
};

export const withTopRatedLabel = (ResturantCard) => {
  return (props) => {
    console.log(props);

    return (
      <div>
        <label className="top-rated bg-black text-white m-2 p-2 rounded-md shadow-sm">
          Top Rated
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
