import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { loadusersIfNotExist } from "./thunks/get-users";
const userEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: "user",
  initialState: userEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(
      loadusersIfNotExist.fulfilled,
      (state, { payload } = {}) => {
        userEntityAdapter.setAll(state, payload);
      }
    ),
});

export default reducer;
