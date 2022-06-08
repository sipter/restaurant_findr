import React from "react";
import { HeaderImg } from "../components/HeaderImg";
import { RestaurantList } from "../components/RestaurantList";
import { RestaurantCard } from "../components/RestaurantCard";

export const Home = () => {
  return (
    <>
      <HeaderImg />
      <RestaurantList />
      <RestaurantCard />
    </>
  );
};
