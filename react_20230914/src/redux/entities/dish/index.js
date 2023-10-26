import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { REQUEST_STATUS } from "../../../constants/statuses";

const entityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "dish",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.fulfilled, (state, { payload } = {}) => {
        entityAdapter.setMany(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      }),
});

export default reducer;
