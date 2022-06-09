import React from "react";
import { HeaderImg } from "../components/HeaderImg";
import { RestaurantList } from "../components/RestaurantList";
import { RestaurantCard } from "../components/RestaurantCard";

const styles = {
  paperContainer: {
    //width: "100%",
    height: "98vh",
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundPosition: "center",
    backgroundImage: `url(https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)`,
  },
};

export const Home = () => {
  return (
    <>
      <body style={styles.paperContainer}>
        <HeaderImg />
        <RestaurantList />
      </body>
    </>
  );
};
