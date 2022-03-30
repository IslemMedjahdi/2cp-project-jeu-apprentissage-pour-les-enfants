import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    toggleMusic: (state, action) => {
      state.value[action.payload.selectedProfile].music =
        !state.value[action.payload.selectedProfile].music;
      AsyncStorageLib.setItem("profiles", JSON.stringify(state.value)).catch(
        (e) => console.warn(e)
      );
    },
    toggleSound: (state, action) => {
      state.value[action.payload.selectedProfile].sound =
        !state.value[action.payload.selectedProfile].sound;
      AsyncStorageLib.setItem("profiles", JSON.stringify(state.value)).catch(
        (e) => console.warn(e)
      );
    },
    changeLanguage: (state, action) => {
      if (state.value[action.payload.selectedProfile].language < 2)
        state.value[action.payload.selectedProfile].language++;
      else state.value[action.payload.selectedProfile].language = 0;
      AsyncStorageLib.setItem("profiles", JSON.stringify(state.value)).catch(
        (e) => console.warn(e)
      );
    },
    loadProfiles: (state, action) => {
      state.value = action.payload.profiles;
    },
  },
});

export const { toggleMusic, toggleSound, changeLanguage, loadProfiles } =
  profilesSlice.actions;
export default profilesSlice.reducer;
