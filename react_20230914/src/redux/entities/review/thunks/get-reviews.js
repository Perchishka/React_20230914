import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds} from "../selectors";
import { selectRestaurantReviewsById } from "../../restaurant/selectors";

export const getReviews = createAsyncThunk(
  "restaurants/getReviews",
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/reviews?restaurantId=:${restaurantId}`);
    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) =>{
      const state = getState();
      const restaurantMenu = selectRestaurantReviewsById(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return ( restaurantMenu && restaurantMenu.some((restaurantId) => reviewIds.includes(restaurantId)));
    },
  }
);
