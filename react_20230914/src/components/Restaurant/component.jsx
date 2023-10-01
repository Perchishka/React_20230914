import { Reviews } from "../Reviews/component";
import { Menu } from "../Menu/component";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu dishes={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};
