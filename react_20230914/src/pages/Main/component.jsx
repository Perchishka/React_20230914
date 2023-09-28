import React from "react";
import { restaurants } from "../../constants/mock";
import { Button } from "../../components/Button/component";
import { NewRestaurant } from "../../components/NewRestaurant/component";
import { useState } from "react";

export const MainPage = () => {
  const [restaurantName, setActiveRestaurant] = useState(restaurants[0].name);
  const restaurant = restaurants.find((r) => r.name === restaurantName);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      <div>
        {restaurants.map((restaurant) => (
          <Button
            key={restaurant.id}
            title={restaurant.name}
            disabled={false}
            onClick={() => setActiveRestaurant(restaurant.name)}
          />
        ))}
      </div>
      <NewRestaurant restaurant={restaurant}></NewRestaurant>
    </div>
  );
};
