import React from "react";
import { useEffect, useState } from "react";


export const RestaurantCard = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  // https://redi-final-restaurants.herokuapp.com/restaurants

  useEffect(() => {
    const getApiRestaurant = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const data = await response.json();
      console.log(data.results);
      setRestaurantData(data.results);
      
    };
    getApiRestaurant();
  }, []);

  console.log("hello");

  return (
    <div className="cardContainer">
        {restaurantData && (
        <>
            <ul>
            {restaurantData.map(({name, rating, cuisine, formatted_address}) => (
                <li>
                    <h3>{name}</h3> {cuisine} {formatted_address} <h2>{rating}</h2>
                </li>
            ))}
            </ul>
        </>
        )}
    </div>
  );
};
