import { selectRestaurantNameById } from "../../redux/entities/restaurant/selectors";
import { Tab } from "../Tab/component";
import { useSelector } from "react-redux";

export const RestaurantTabs = ({ restaurantIds, onTabClick }) => {

  const getNameById = (id) => {
    return useSelector((state) => selectRestaurantNameById(state, id));
  };

  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab key={id} onClick={() => onTabClick(id)} disabled={false}>
          {getNameById(id)}
        </Tab>
      ))}
    </div>
  );
};
