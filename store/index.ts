import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slices/userSlice";
import { trackReducer } from "./Slices/trackSlice";
import { changeUsername, changePassword } from "./Slices/userSlice";
import { checkCredentials } from "./actions/auth/checkCredentials";
import User from "types/User";

export interface Store {
  user: User;
  tracks: any;
}

const store = configureStore({
  reducer: {
    user: userReducer,
    track: trackReducer,
  },
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

export { store };
export { changeUsername, changePassword, checkCredentials };
