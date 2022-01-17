import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/moviesSlice";
import detailsReducer from "./details/detailsSlice";
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details : detailsReducer,
  },
});
