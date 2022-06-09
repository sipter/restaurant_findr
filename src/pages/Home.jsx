import React from "react";
import { HeaderImg } from "../components/HeaderImg";
import { RestaurantList } from "../components/RestaurantList";
import { RestaurantCard } from "../components/RestaurantCard";

const styles = {
  paperContainer: {
      height: 1356,
      backgroundImage: `url(${"static/src/img/main.jpg"})`
  }
};

export const Home = () => {
  return (
    < >
    <div style={styles.paperContainer} >
       <HeaderImg />
      <RestaurantList />
      <RestaurantCard />
    </div>
     
    </>
  );
};

