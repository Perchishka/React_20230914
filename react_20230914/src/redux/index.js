import {  configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import restaurant from "./entities/restaurant";
import dish from "./entities/dish"
import review from "./entities/review"
import user from "./entities/user"
import { loggerMiddleware } from "./middlewares/logger";

const store = configureStore({
  reducer: { restaurant, dish, review, user},
  middleware: (getDefaultMiddleware)=>[...getDefaultMiddleware(), loggerMiddleware,],
},
);

export default store;
