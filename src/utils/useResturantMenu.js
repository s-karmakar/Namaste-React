import React from "react";
import { useState, useEffect } from "react";
import { RES_MENU_API } from "./constants";

const useResturantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchResturantMenu();
  }, []);
  const fetchResturantMenu = async () => {
    const data = await fetch(RES_MENU_API + resID);
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useResturantMenu;
