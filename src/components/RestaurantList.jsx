import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { ListImg } from "./ListImg";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";

export const RestaurantList = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [selectedDelivery, setSelectedDelivery] = useState(true);
  const [selectedPickup, setSelectedPickup] = useState(true);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
    setSelectedRestaurant(null);
  };

  const filterSearch = (restaurant) => {
    return restaurant.cuisine.toString().toLowerCase().includes(searchValue);
  };

  const filterDelivery = (restaurant) => {
    return (
      restaurant.delivery === selectedDelivery &&
      restaurant.pickup === selectedPickup
    );
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

  const hasRestaurants = restaurantData.length > 0;
  return (
    <>
      {hasRestaurants && <SearchBar onChange={onSearchChange} />}
      {searchValue !== "" && (
        <>
          <DeliveryDiningIcon
            sx={{
              color: selectedDelivery ? "gold" : "white",
              fontSize: "50px",
              margin: "5px",
            }}
            onClick={() => setSelectedDelivery(!selectedDelivery)}
          />
          <TakeoutDiningIcon
            sx={{
              color: selectedPickup ? "gold" : "white",
              fontSize: "50px",
              margin: "5px",
            }}
            onClick={() => setSelectedPickup(!selectedPickup)}
          />
        </>
      )}
      {restaurantData && searchValue !== "" && (
        <>
          {restaurantData
            .filter(filterSearch)
            .filter(filterDelivery)
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
                    openNow={opening_hours.open_now}
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
