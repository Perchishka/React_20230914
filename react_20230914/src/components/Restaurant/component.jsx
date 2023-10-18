import { Reviews } from "../Reviews/component";
import { Menu } from "../Menu/component";
import { AddReviewButton } from "../AddReviewButton/component";

export const Restaurant = ({ restaurant }) => {

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menuIds={restaurant.menu} />
      <Reviews reviewsIds={restaurant.reviews} />
      <AddReviewButton />
    </div>
  );
};
