import React from "react";
import { useState, useEffect } from "react";
import { RES_MENU_API } from "../../utils/constants";
import Shimmer from "../Shimmer";
import { useParams } from "react-router";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resID } = useParams();

  useEffect(() => {
    fetchResturantMenu();
  }, []);

  const fetchResturantMenu = async () => {
    const response = await fetch(RES_MENU_API + resID);
    const data = await response.json();
    console.log(data);
    setResInfo(data);
  };

  if (!resInfo) return <Shimmer />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <br />
      <h3>cuisines : {cuisines.join(", ")}</h3>
      <h3>Cost for two : {costForTwoMessage}</h3>
      <h3>Avg Rating : {avgRating}</h3>
      <br />
      <div className="food-menu">
        <h2>Menu</h2>
        <div className="menu-items">
          <ul>
            {/* <li>
              {itemCards[0].card.info.name} - Rs.{" "}
              {itemCards[0].card.info.price / 100}
            </li> */}

            {itemCards.map((item) => {
              return (
                <li key={item?.card?.info?.id}>
                  {item?.card?.info?.name} -{`   Rs.`}{" "}
                  {item?.card?.info?.price / 100} <br />
                  <br />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResturantMenu;
