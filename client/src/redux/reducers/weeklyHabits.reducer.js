import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { dates } from "../data";
const weeklyHabitsAdapter = createEntityAdapter({
  selectId: (elm) => elm.id,
});


//mark habits as done not done
export const markHabit = createAsyncThunk(
  "weeklyHabits/markHabit",
  ({ currentWeek, date, habitId }, { dispatch }) => {
    const currentWeekId = currentWeek.id;
    let modifiedWeek = { ...currentWeek };
    //toggle the mark
    if (modifiedWeek[date].includes(habitId)) {
      //if habit is present
      let i = modifiedWeek[date].indexOf(habitId);
      let tempArr = [...modifiedWeek[date]];
      tempArr.splice(i, 1);
      modifiedWeek[date] = tempArr;
      return { modifiedWeek, currentWeekId };
    } else {
      //habit is not present
      modifiedWeek[date] = [habitId, ...modifiedWeek[date]];
      return { modifiedWeek, currentWeekId };
    }
  }
);

const weeklyHabitsSlice = createSlice({
  name: "weeklyHabits",
  initialState: weeklyHabitsAdapter.getInitialState(),
  reducers: {
    setWeeks: (state, { payload }) => {
      //set loaded data to entity adapter
      weeklyHabitsAdapter.setMany(state, payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(markHabit.fulfilled, (state, { payload }) => {
      // update habit in the week
      weeklyHabitsAdapter.updateOne(state, {
        id: payload.currentWeekId,
        changes: payload.modifiedWeek,
      });
    });
  },
});

//habitsSelector
export const weeklyHabitsSelector = weeklyHabitsAdapter.getSelectors(
  (state) => state.weeklyHabits
);
//actions 
export const weeklyHabitsActions = weeklyHabitsSlice.actions;
export const weeklyHabitsReducer = weeklyHabitsSlice.reducer;
