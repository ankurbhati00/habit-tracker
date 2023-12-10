import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookie from "js-cookie";
//fetch the users
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkApi) => {
    const response = await fetch(`${process.env.api}/user/check-logedin`, {
      method: "get",
      credentials: "include",
    });
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
    const response = await fetch(`${process.env.api}/user/sign-in`, {
      method: "post",
      credentials: "include",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    const user = await response.json();
    if (response.status === 401) {
      return toast("Invalid password");
    } else if (response.status === 200) {
      return { logedin: true, ...user };
    }
    return toast("invalid crediantials");
  }
);

//log out user
export const logOut = createAsyncThunk("user/logout", async () => {
  const response = await fetch(`${process.env.api}/user/log-out`);
  if (response.status === 200) {
    // remove current session
    Cookie.remove("user_sid");
    return { logedin: false };
  } else return { logedin: true };
});

const INITIAL_STATE = {
  logedin: false,
  userId: "",
  name: "",
  bedTime: "",
  weeks: [],
  loading: true,
};
//create slice
const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        const { bedTime, userId, name, weeks } = payload.data;
        if (payload.status === 200) {
          state.logedin = true;
          state.userId = userId;
          state.name = name;
          state.bedTime = bedTime;
          state.weeks = weeks;
        }
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        if (payload.logedin) {
          state.name = payload.name;
          state.userId = payload.userId;
          state.logedin = true;
          state.bedTime = payload.bedTime;
          state.weeks = payload.weeks;
        }
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.logedin = payload.logedin;
      });
  },
});

//user reducer
export const userReducer = userSlice.reducer;
//user actions
export const userActions = userSlice.actions;
//user selectors
export const userSelector = (state) => state.user;
