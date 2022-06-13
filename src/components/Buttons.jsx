import React from "react";

export const Buttons = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>Delivery</button>
      <button>Pickup</button>
    </>
  );
};
