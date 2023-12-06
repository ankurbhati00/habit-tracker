import { configureStore } from "@reduxjs/toolkit";
import { weeklyHabitsReducer } from "./reducers/weeklyHabits.reducer.js";
import { habitsReducer } from "./reducers/habits.reducer.js";
import { userReducer } from "./reducers/user.reducer.js";
export const store = configureStore({
  reducer: {
    weeklyHabits: weeklyHabitsReducer,
    habits: habitsReducer,
    user:userReducer
  },
});
