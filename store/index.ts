import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Slices/userSlice";
import { trackReducer } from "./Slices/trackSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    track: trackReducer,
  },
});

export { store };
