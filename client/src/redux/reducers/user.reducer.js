import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

//fetch the users
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkApi) => {
    const response = await fetch("http://localhost:8000/user/check-logedin");
      const data = await response.json();
    if (response.status === 200) {
      return { status: 200, data };
    }
    return { status: response.status, data: {} };

   
  }
);

//sign in user
export const signInUser = createAsyncThunk(
  "user/signInUser",
  async (data, thunkApi) => {
    const response = await fetch("http://localhost:8000/user/sign-in", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    const user = await response.json();
    if (response.status === 401) {
      return toast("Invalid password");
    } else if (response.status === 200) {
      return {logedin:true,...user};
    }
    return toast("invalid crediantials");
  }
);

const INITIAL_STATE = {
  logedin: false,
  userId: "",
  name: "",
  bedTime: "",
  weeks:[]
};
//create slice
const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        const { bedTime, userId, name,weeks } = payload;
        if (payload.status === 200) {
          state.logedin = true;
          state.userId = userId;
          state.name = name;
          state.bedTime = bedTime;
          state.weeks = weeks;
        }
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        if (payload.logedin) {
          state.name = payload.name;
          state.userId = payload.userId;
          state.logedin = true;
          state.bedTime = payload.bedTime;
          state.weeks = payload.weeks;

        }
      });
  },
});

//user reducer
export const userReducer = userSlice.reducer;
//user actions
export const userActions = userSlice.actions;
//user selectors
export const userSelector = (state) => state.user;
