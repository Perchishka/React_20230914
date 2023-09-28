import React from "react";
import { restaurants } from "../../constants/mock";
import { Button } from "../../components/Button/component";
import { NewRestaurant } from "../../components/NewRestaurant/component";
import { useState } from "react";

export const MainPage = () => {
  const [restaurantName, setActiveRestaurant] = useState(restaurants[0].name);
  const restaurant = restaurants.find(r => r.name === restaurantName);

  return (
    <div>
      <nav>
        {restaurants.map(restaurant => (
          <Button
            key={restaurant.id}
            title={restaurant.name}
            onClick={() => setActiveRestaurant(restaurant.name)}
          />
        ))}
      </nav>
       <NewRestaurant restaurant={restaurant} ></NewRestaurant>
      
    </div>
  );
};
