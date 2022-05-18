import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "./musicSlice";
import profilesSlice from "./profilesSlice";
import selectedProfileSlice from "./selectedProfileSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    music: musicSlice,
    profiles: profilesSlice,
    selectedProfile: selectedProfileSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
