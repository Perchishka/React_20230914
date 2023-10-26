import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "../selector";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) =>{
      const state = getState();
      const restaurantReviews = selectRestaurantReviewsById(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return ( restaurantReviews && restaurantReviews.some((restaurantId) => !reviewIds.includes(restaurantId)));
    },
  }
);
