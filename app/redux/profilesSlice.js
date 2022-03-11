import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      name: "Asmaa",
      birthday: { day: 21, month: 1, year: 2015 },
      score: 120000,
      avatar: 0,
      music: true,
      sound: true,
      language: 0,
      badges: [],
      levels: [],
    },
  ],
};

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    toggleMusic: (state, action) => {
      state.value[action.payload.selectedProfile].music =
        !state.value[action.payload.selectedProfile].music;
    },
    toggleSound: (state, action) => {
      state.value[action.payload.selectedProfile].sound =
        !state.value[action.payload.selectedProfile].sound;
    },
    changeLanguage: (state, action) => {
      if (state.value[action.payload.selectedProfile].language < 2)
        state.value[action.payload.selectedProfile].language++;
      else state.value[action.payload.selectedProfile].language = 0;
    },
  },
});

export const { toggleMusic, toggleSound, changeLanguage } =
  profilesSlice.actions;
export default profilesSlice.reducer;
