import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import {habits} from "../data";
const habitsAdapter = createEntityAdapter({
  selectId: (elm) => elm.id,
});

//load data from api
export const loadHabits = createAsyncThunk(
  "habits/loadHabits",
  (_, { dispatch }) => {
    return habits;
  }
);

//add habits
export const addHabit = createAsyncThunk(
  "habits/addHabit",
  (data, { dispatch }) => {
    return data;
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
    builder
      .addCase(loadHabits.fulfilled, (state, { payload }) => {
        habitsAdapter.setMany(state, payload);
      })
      //add new habits to states
      .addCase(addHabit.fulfilled, (state, { payload }) => {
        //add habit to entityAdapter
        habitsAdapter.addOne(state, payload);
        console.log('habit data', payload)
      })
      ;
  },
});

//habitsSelector
export const habitsSelector = habitsAdapter.getSelectors(
  (state) => state.habits
);
export const habitsReducer = habitsSlice.reducer;
