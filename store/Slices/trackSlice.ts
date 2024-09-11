import { createSlice } from "@reduxjs/toolkit";

const trackSlice = createSlice({
  name: "track",
  initialState: {},
  reducers: {},
  extraReducers(builder) {},
});

export const trackReducer = trackSlice.reducer;
