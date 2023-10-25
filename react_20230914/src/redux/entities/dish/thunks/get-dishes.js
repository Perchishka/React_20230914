import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds} from "../selectors";
import { selectRestaurantMenuById } from "../../restaurant/selectors";

export const getDishes = createAsyncThunk(
  "restaurants/getDishes",
  async (restaurantId) => {
    const response = fetch(`http://localhost:3001/api/dishes?restaurantId=:${restaurantId}`);
    return (await response).json();
  },
  {
    condition: (restaurantId, { getState }) =>{
      const state = getState();
      const restaurantMenu = selectRestaurantMenuById(state, restaurantId);
      const dishesId = selectDishIds(state);

      return ( restaurantMenu && restaurantMenu.some((restaurantId) => dishesId.includes(restaurantId)));
    },
  }
);
