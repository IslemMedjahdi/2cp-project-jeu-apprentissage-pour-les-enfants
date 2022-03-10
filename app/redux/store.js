import { configureStore } from "@reduxjs/toolkit";
import profilesSlice from "./profilesSlice";
import selectedProfileSlice from "./selectedProfileSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    profiles: profilesSlice,
    selectedProfile: selectedProfileSlice,
    user: userSlice,
  },
});
