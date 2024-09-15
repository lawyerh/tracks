import { createAsyncThunk } from "@reduxjs/toolkit";
import deleteStorage from "util/deleteStorage";

export const logout = createAsyncThunk("user/logout", async () => {
  await deleteStorage("username");
  await deleteStorage("token");
});
