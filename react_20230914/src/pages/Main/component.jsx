import React, { useContext } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../../components/Restaurant/component";
import { useState } from "react";
import { RestaurantTabs } from "../../components/RestauurantTabs/component";
import { Footer } from "../../components/Footer/component";
import { Header } from "../../components/Header/component";
import { links } from "../../constants/footer";
import { NewReviewForm } from "../../components/NewReviewForm/component";
import { ThemeProvider, ThemeContext } from "../../contexts/Theme";

import styles from "./styles.module.css";

export const MainPage = () => {
  const [restaurantIndex, setRestaurantIndex] = useState(0);

  if (!restaurants?.length) {
    return null;
  }

  return (
    <ThemeProvider>
      <div className={styles.root}>
        <Header className={styles.header} />
        <RestaurantTabs
          restaurants={restaurants}
          onTabClick={setRestaurantIndex}
        />
        <Restaurant restaurant={restaurants[restaurantIndex]}></Restaurant>
        <NewReviewForm></NewReviewForm>
        <Footer className={styles.footer} links={links}></Footer>
      </div>
    </ThemeProvider>
  );
};
