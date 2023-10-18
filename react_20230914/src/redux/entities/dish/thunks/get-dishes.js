import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById} from "../selectors";

export const getDishes = createAsyncThunk(
  "restaurants/getDishes",
  async (id) => {
    const response = fetch(`http://localhost:3001/api/dishes?restaurantId=:${id}`);
    return (await response).json();
  },
  {
    condition: (_, { getState }) => !selectDishById(getState())?.length,
  }
);
