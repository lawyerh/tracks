import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
  },
  reducers: {},
  extraReducers(builder) {},
});

export const userReducer = userSlice.reducer;
