import React from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../../components/Restaurant/component";
import { useState } from "react";
import { RestaurantTabs } from "../../components/RestauurantTabs/component";
import { Layout } from "../../components/Layout/component";

export const MainPage = () => {
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        onTabClick={setRestaurantIndex}
      />
      <Restaurant restaurant={restaurants[restaurantIndex]}></Restaurant>
    </Layout>
  );
};
