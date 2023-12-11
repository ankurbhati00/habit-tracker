import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const habitsAdapter = createEntityAdapter({
  selectId: (elm) => elm._id,
});

//load data from api
export const loadHabits = createAsyncThunk(
  "habits/loadHabits",
  async (userId, { dispatch }) => {
    const response = await fetch(`${import.meta.env.VITE_API}/habits`, {
      method: "post",
      body: JSON.stringify({ userId }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data.habits;
  }
);

//add habits
export const addHabit = createAsyncThunk(
  "habits/addHabit",
  async (data, { dispatch }) => {
    const response = await fetch(`${import.meta.env.VITE_API}/habits/add`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    const { habit } = await response.json();
    toast("Added successfuly.");
    return habit;
  }
);

//delete habits
export const deleteHabit = createAsyncThunk(
  "habits/delete",
  async (habitId, _) => {
    const response = await fetch(`${import.meta.env.VITE_API}/habits/delete`, {
      method: "delete",
      body: JSON.stringify({ habitId }),
      headers: {
        "content-type": "application/json",
      },
    });
    //if habit deleted successfuly from db
    if (response.status === 201) {
      toast("Deleted successfuly.");
      return habitId;
    }
    return toast("Internal server Error");
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
      })
      .addCase(deleteHabit.fulfilled, (state, { payload }) => {
        if (payload) {
          habitsAdapter.removeOne(state, payload);
        }
      });
  },
});

//habitsSelector
export const habitsSelector = habitsAdapter.getSelectors(
  (state) => state.habits
);
export const habitsReducer = habitsSlice.reducer;
