import { Button } from "../Button/component";

export const RestaurantTabs = ({ restaurants, onTabClick }) => {
  return (
    <div>
      {restaurants.map((restaurant, index) => (
        <Button
          key={restaurant.id}
          title={restaurant.name}
          onClick={() => onTabClick(index)}
          disabled={false}
        />
      ))}
    </div>
  );
};
