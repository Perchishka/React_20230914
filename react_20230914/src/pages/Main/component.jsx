import React from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../../components/Restaurant/component";
import { useState } from "react";
import { RestaurantTabs } from "../../components/RestauurantTabs/component";
import "./index.css"
import { Footer } from "../../components/Footer/component";
import { Header } from "../../components/Header/component";
import { links } from "../../constants/footer";

export const MainPage = () => {
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <div>
      <Header />
      <RestaurantTabs
      restaurants={restaurants}
      onTabClick={setRestaurantIndex}
    />
      <Restaurant restaurant={restaurants[restaurantIndex]}></Restaurant>
      <Footer links = {links}></Footer>
    </div>
  );
};
