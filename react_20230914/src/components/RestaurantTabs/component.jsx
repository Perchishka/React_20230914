import { Tab } from "../Tab/component";

export const RestaurantTabs = ({ restaurants, onTabClick }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Tab
          key={restaurant.id}
          onClick={() => onTabClick(index)}
          disabled={false}
        >
          {restaurant.name}
        </Tab>
      ))}
    </div>
  );
};
