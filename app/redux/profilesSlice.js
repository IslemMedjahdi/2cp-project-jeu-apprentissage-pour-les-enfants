import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      name: "Asmaa",
      birthday: { month: 1, year: 2015 },
      score: 120000,
      avatar: 1,
      music: false,
      sound: true,
      language: 1,
      badges: [
        {
          image: require("../../assets/badges/badge0.png"),
          text: "Master",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "BlaBla",
        },
        {
          image: require("../../assets/badges/badge2.png"),
          text: "BlaBla",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "BlaBla",
        },
      ],
      levels: [],
    },
    {
      name: "Badro",
      birthday: { day: 21, month: 1, year: 2005 },
      score: 500,
      avatar: 2,
      music: false,
      sound: true,
      language: 1,
      badges: [
        {
          image: require("../../assets/badges/badge0.png"),
          text: "Master",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "BlaBla",
        },
        {
          image: require("../../assets/badges/badge2.png"),
          text: "BlaBla",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "BlaBla",
        },
      ],
      levels: [],
    },
    {
      name: "Marwa",
      birthday: { day: 17, month: 7, year: 2008 },
      score: 500,
      avatar: 2,
      music: false,
      sound: true,
      language: 1,
      badges: [
        {
          image: require("../../assets/badges/badge0.png"),
          text: "Master",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "3CEM",
        },
        {
          image: require("../../assets/badges/badge2.png"),
          text: "BlaBla",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "BlaBla",
        },
      ],
      levels: [],
    },
    {
      name: "Rabah",
      birthday: { day: 3, month: 9, year: 1969 },
      score: 500,
      avatar: 2,
      music: false,
      sound: true,
      language: 1,
      badges: [
        {
          image: require("../../assets/badges/badge0.png"),
          text: "Master",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "BlaBla",
        },
        {
          image: require("../../assets/badges/badge2.png"),
          text: "BlaBla",
        },
        {
          image: require("../../assets/badges/badge1.png"),
          text: "BlaBla",
        },
      ],
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
