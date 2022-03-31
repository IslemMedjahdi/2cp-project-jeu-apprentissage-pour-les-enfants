import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    language: 0,
    connected: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeLanguageUser: (state) => {
      if (state.value.language < 2) state.value.language++;
      else state.value.language = 0;
      AsyncStorageLib.setItem("user", JSON.stringify(state.value)).catch((e) =>
        console.warn(e)
      );
    },
    loadUser: (state, action) => {
      state.value = action.payload.user;
    },
  },
});

export const { changeLanguageUser, loadUser } = userSlice.actions;
export default userSlice.reducer;
