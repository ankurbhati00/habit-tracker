import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { dates } from "../data";
var id = 0;
const weeklyHabitsAdapter = createEntityAdapter({
  selectId: (elm) => id++,
});

//load data from api
export const loadWeeklyHabits = createAsyncThunk(
  "weeklyHabits/loadWeeklyHabits",
  (_, { dispatch }) => {
    return dates;
  }
);


const weeklyHabitsSlice = createSlice({
  name: "weeklyHabits",
  initialState: weeklyHabitsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    //set loaded data to entity adapter
    builder
      .addCase(loadWeeklyHabits.fulfilled, (state, { payload }) => {
        weeklyHabitsAdapter.setMany(state, payload);
      })
      
  },
});

//habitsSelector
export const weeklyHabitsSelector = weeklyHabitsAdapter.getSelectors(
  (state) => state.weeklyHabits
);
export const weeklyHabitsReducer = weeklyHabitsSlice.reducer;
