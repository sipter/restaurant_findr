import React from "react";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { SearchBar } from "./SearchBar";

export const RestaurantCard = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  // https://redi-final-restaurants.herokuapp.com/restaurants

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filterSearch = (name) => {
    return name.name.toLowerCase().includes(searchValue);
  };

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

  const hasProducts = restaurantData.length > 0;

  return (
    <>
      {hasProducts && <SearchBar onChange={onSearchChange} />}

      <div className="cardContainer">
        {restaurantData && (
          <>
            <ul>
              {restaurantData
                .filter(filterSearch)
                .map(
                  ({
                    name,
                    photos,
                    social,
                    rating,
                    cuisine,
                    formatted_address,
                    opening_hours,
                    delivery,
                    pickup,
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
                      <p>
                        {delivery ? <p>Delivery</p> : pickup && <h1>Pickup</h1>}
                        {opening_hours.open_now === true ? (
                          <p>Open now</p>
                        ) : (
                          <p>Close now</p>
                        )}
                      </p>
                    </li>
                  )
                )}
            </ul>
          </>
        )}
      </div>
    </>
  );
};
