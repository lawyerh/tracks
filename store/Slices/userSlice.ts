import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkCredentials } from "store/actions/auth/checkCredentials";
import User from "types/User";
import { CredentialsResponse } from "store/actions/auth/checkCredentials";
import { RootState } from "store";

const initialState: User = {
  id: null,
  username: "",
  password: "",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      checkCredentials.fulfilled,
      (state, action: PayloadAction<CredentialsResponse>) => {
        console.log("fulfilled", action.payload);
      }
    );
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
export const { changeUsername, changePassword } = userSlice.actions;
