import React from "react";
import { RestaurantList } from "../components/RestaurantList";
import { Container } from "@mui/material";

export const Home = () => {
  return (
    <>
      <Container>
        <RestaurantList />
      </Container>
    </>
  );
};
