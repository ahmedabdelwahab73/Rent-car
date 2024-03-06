// store.js

import { configureStore } from "@reduxjs/toolkit";
import popularCarsReducer from "../state/PopularcarsSlice";
import slidelocationCars from "../state/SlidLocation"
const store = configureStore({
  reducer: {
    popularCars: popularCarsReducer,
    slidelocationCars,
    // Add other reducers if needed
  },
});

export default store;
