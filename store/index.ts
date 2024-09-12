import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slices/userSlice";
import { trackReducer } from "./Slices/trackSlice";
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

export { store };
