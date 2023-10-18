import { useEffect, useState } from "react";
import { RestaurantContainer } from "../../components/Restaurant/container";
import { RestaurantTabsContainer } from "../../components/RestaurantTabs/container";
import { Layout } from "../../components/Layout/component";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantLoadingStatus,
} from "../../redux/entities/restaurant/selectors";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { REQUEST_STATUS } from "../../constants/statuses";

export const MainPage = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const loadingStatus = useSelector(selectRestaurantLoadingStatus);
  const [activeRestaurantId, setActiveResraurantId] = useState(
    restaurantIds[0]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <Layout>
      <RestaurantTabsContainer
        onTabClick={setActiveResraurantId}
        activeRestaurantId={activeRestaurantId}
      />
      {loadingStatus === REQUEST_STATUS.pending ?  <Div>Loading...</Div> : <RestaurantContainer restaurantId={activeRestaurantId} />
      }
    </Layout>
  );
};
