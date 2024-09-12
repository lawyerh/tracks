import { createSlice } from "@reduxjs/toolkit";
import User from "types/User";

const initialState: User = {
  id: "null",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {},
});

export const userReducer = userSlice.reducer;
