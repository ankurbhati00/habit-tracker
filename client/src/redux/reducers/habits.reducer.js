import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { habits } from "../data";
const habitsAdapter = createEntityAdapter({
  selectId: (elm) => elm._id,
});

//load data from api
export const loadHabits = createAsyncThunk(
  "habits/loadHabits",
  async (_, { dispatch }) => {
    const response = await fetch("http://localhost:8000/habits");
    const data = await response.json();
    return data.habits;
  }
);

//add habits
export const addHabit = createAsyncThunk(
  "habits/addHabit",
  async (data, { dispatch }) => {
    const response = await fetch("http://localhost:8000/habits/add", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    const {habit} = await response.json();

    return habit;
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
        console.log(payload);
          habitsAdapter.addOne(state, payload);
        
      });
  },
});

//habitsSelector
export const habitsSelector = habitsAdapter.getSelectors(
  (state) => state.habits
);
export const habitsReducer = habitsSlice.reducer;
