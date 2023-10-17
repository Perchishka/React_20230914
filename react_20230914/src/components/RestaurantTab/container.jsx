import { useSelector } from "react-redux";
import { Tab } from "../Tab/component";
import { selectResuarantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
  const restaurant = useSelector((state) =>
    selectResuarantById(state, restaurantId)
  );

  if (!restaurant) {
    return null;
  }

  return <Tab {...props}>{restaurant.name}</Tab>;
};
