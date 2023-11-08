import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import dates from "../data";
var id = 0;
const habitsAdapter = createEntityAdapter({
    selectId: elm => id++,
});

//load data from api
export const loadHabits = createAsyncThunk(
  "habits/loadHabits",
    (_, { dispatch }) => {
        console.log('dates', dates);
        return dates;
  }
);
const habitsSlice = createSlice({
  name: "habits",
  initialState: habitsAdapter.getInitialState(),
  reducers: {
    addHabit(state) {},
  },
  extraReducers: (builder) => {
    //set loaded data to entity adapter
    builder.addCase(loadHabits.fulfilled, (state, { payload }) => {
      habitsAdapter.setMany(state, payload);
    });
  },
});

//habitsSelector
export const habitsSelector = habitsAdapter.getSelectors(
  (state) => state.habits
);
export const habitsReducer = habitsSlice.reducer;
