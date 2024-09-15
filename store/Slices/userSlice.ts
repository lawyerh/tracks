import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkCredentials } from "store/actions/auth/checkCredentials";
import { logout } from "store/actions/auth/logout";
import User from "types/User";
import { CredentialsResponse } from "types/Credentials";
import { RootState } from "store";
import { validateNewUser } from "store/actions/auth/validateNewUser";
import getStorage from "util/getStorage";

const initialState: User = {
  isLoggedIn: getStorage("token") ? true : false,
  username: getStorage("username") || "",
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
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      checkCredentials.fulfilled,
      (state, action: PayloadAction<CredentialsResponse>) => {
        if (action.payload.token) {
          state.error = null;
          state.password = "";
          state.isLoggedIn = true;
        } else {
          if (action.payload.status != 200) {
            state.error = "Incorrect username or password";
          }
        }
      }
    );

    builder.addCase(checkCredentials.pending, () => {
      // Could add logic here to display a loader
      console.log("pending");
    });

    builder.addCase(
      validateNewUser.fulfilled,
      (state, action: PayloadAction<CredentialsResponse>) => {
        if (action.payload.token) {
          state.error = null;
          state.username = "";
          state.password = "";
          state.isLoggedIn = true;
        } else {
          if (action.payload.status != 200) {
            state.error = "Must include username and password";
          }
        }
      }
    );

    builder.addCase(validateNewUser.pending, () => {
      console.log("pending");
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.username = "";
      state.isLoggedIn = false;
    });
  },
});

export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
export const { changeUsername, changePassword, setLoggedIn } =
  userSlice.actions;
