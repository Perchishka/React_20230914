import { Reviews } from "../Reviews/component";
import { Menu } from "../Menu/component";
import { AddReviewButton } from "../AddReviewButton/component";
import { MenuContainer } from "../Menu/container";

export const Restaurant = ({ restaurant }) => {

  return (
    <div>
      <h2>{restaurant.name}</h2>
      <MenuContainer restaurantId={restaurant.id} />
      <Reviews reviewsIds={restaurant.reviews} />
      <AddReviewButton />
    </div>
  );
};
