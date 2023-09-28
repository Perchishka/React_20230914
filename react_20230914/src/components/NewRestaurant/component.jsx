import { Reviews } from "../Reviews/component";
import { Menu } from "../Menu/component";

export const NewRestaurant = (restaurant) => {
  return (
    <div>
    <h2>{restaurant.name}</h2>
    <Menu menu = {restaurant.menu} />
    <Reviews  reviews = {restaurant.reviews}/>
  </div>
  );
};
