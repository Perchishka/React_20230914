import { useState } from "react";
import { useSelector } from "react-redux";
import { Restaurant } from "../../components/Restaurant/component";
import { RestaurantTabs } from "../../components/RestaurantTabs/component";
import { Layout } from "../../components/Layout/component";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  const [activeRestaurantId, setActiveResraurantId] = useState(restaurantIds[0]);


  return (
    <Layout>
      <RestaurantTabs
        restaurantIds={restaurantIds}
        onTabClick={setActiveResraurantId}
      />
      <Restaurant restaurantId={activeRestaurantId}></Restaurant>
    </Layout>
  );
};


