import { useState } from "react";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { Layout } from "../../components/Layout/component";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";


export const MainPage = () => {

  const defaultRestaurantIds = useSelector(selectRestaurantIds);
  const [activeRestaurantId, setActiveResraurantId] = useState(defaultRestaurantIds[0]);


  return (
    <Layout>
      <RestaurantTabsContainer
        onTabClick={setActiveResraurantId}
        activeRestaurantId={activeRestaurantId}
      />
    { activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId} />}
    </Layout>
  );
};


