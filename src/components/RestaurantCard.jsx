import React from "react";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";

export const RestaurantCard = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  // https://redi-final-restaurants.herokuapp.com/restaurants

  useEffect(() => {
    const getApiRestaurant = async () => {
      const response = await fetch(
        `https://redi-final-restaurants.herokuapp.com/restaurants`
      );
      const data = await response.json();
      setRestaurantData(data.results);
    };
    getApiRestaurant();
  }, []);
  console.log(restaurantData);

  return (
    <div className="cardContainer">
      {restaurantData && (
        <>
          <ul>
            {restaurantData.map(
              ({
                name,
                photos,
                social,
                rating,
                cuisine,
                formatted_address,
                opening_hours,
              }) => (
                <li>
                  <h3>{name}</h3>
                  <img
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&maxheight=200&photo_reference=${photos[0].photo_reference}&key=${API_KEY}`}
                    alt="reference"
                  />
                  <h2>{cuisine}</h2>
                  {formatted_address} <p>{social.phone}</p>
                  <h2>
                    <StarIcon />
                    {rating}
                  </h2>
                  <p>Open {opening_hours.hours.open}</p>
                  <p>Close {opening_hours.hours.close}</p>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </div>
  );
};
