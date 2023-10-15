import { Reviews } from "../Reviews/component";
import { Menu } from "../Menu/component";
import { AddReviewButton } from "../AddReviewButton/component";
import { useSelector } from "react-redux";
import { selectResuarantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state)=>selectResuarantById(state, restaurantId));
  return (
    <div>
      <h2>{restaurant.name}</h2>
      <Menu menuIds={restaurant.menu} />
      <Reviews reviewsIds={restaurant.reviews} />
      <AddReviewButton />
    </div>
  );
};
