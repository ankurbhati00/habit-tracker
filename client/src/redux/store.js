import { configureStore } from "@reduxjs/toolkit";
import { habitsReducer } from "./reducers/habitsWeekly.reducer";


export const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});