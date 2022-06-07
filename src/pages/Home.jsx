import React from "react";
import { HeaderImg } from "../components/HeaderImg";
import { SearchBar } from "../components/SearchBar";
import { RestaurantList } from "../components/RestaurantList";
import { RestaurantCard } from "../components/RestaurantCard";
export const Home = () => {
  return (
    <>
      <HeaderImg />
      <SearchBar />
      <RestaurantList />
      <RestaurantCard />
    </>
  );
};
