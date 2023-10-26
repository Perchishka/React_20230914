import { getReviews } from "../../redux/entities/review/thunks/get-reviews";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurant/selectors";
import { useSelector } from "react-redux";
import { getUsersIfNotExist } from "../../redux/entities/user/thunks/get-users";
import { REQUEST_STATUS } from "../../constants/statuses";
import { useRequest } from "../../hooks/use-request";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId));

  const reviewsLoadinStatus = useRequest(getReviews, restaurantId);
  const usersLoadinStatus = useRequest(getUsersIfNotExist);

  if (
    reviewsLoadinStatus === REQUEST_STATUS.pending ||
    usersLoadinStatus === REQUEST_STATUS.pending
  ) {
    return <div>Loading...</div>;
  }
  return <Reviews reviews={reviews} />;
};
