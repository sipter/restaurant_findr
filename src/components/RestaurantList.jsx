import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { ListImg } from "./ListImg";

export const RestaurantList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  // https://redi-final-restaurants.herokuapp.com/restaurants

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
    setSelectedRestaurant(null);
  };

  const filterSearch = (name) => {
    return name.cuisine.toLowerCase().includes(searchValue);
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

  const hasRestaurants = restaurantData.length > 0;
  return (
    <>
      {hasRestaurants && <SearchBar onChange={onSearchChange} />}
      {restaurantData && searchValue !== "" && (
        <>
          {restaurantData
            .filter(filterSearch)
            .map(
              (
                {
                  name,
                  photos,
                  social,
                  rating,
                  cuisine,
                  formatted_address,
                  opening_hours,
                  delivery,
                  pickup,
                },
                index
              ) => (
                <>
                  <RestaurantCard
                    onClick={() => {
                      if (selectedRestaurant === index) {
                        setSelectedRestaurant(null);
                      } else {
                        setSelectedRestaurant(index);
                      }
                    }}
                    key={index}
                    name={name}
                    cuisine={cuisine}
                    rating={rating}
                    photos={photos[0].photo_reference}
                    openingHours={opening_hours.hours.open}
                    closingHours={opening_hours.hours.close}
                    delivery={delivery}
                    pickup={pickup}
                  />
                  {selectedRestaurant === index ? (
                    <ListImg customerPhotos={photos[0].links} />
                  ) : null}
                </>
              )
            )}
        </>
      )}
    </>
  );
};
// ({
//   name,
//   photos,
//   social,
//   rating,
//   cuisine,
//   formatted_address,
//   opening_hours,
//   delivery,
//   pickup,
// }) => (
// )}
