import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 0,
      name: "Asmaa",
      birthday: 2015,
      score: 500,
      avatar: 2,
      music: false,
      sound: false,
      language: 0,
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
      level: 2,
    },
    {
      id: 1,
      name: "Islem",
      birthday: 2002,
      score: 100,
      avatar: 1,
      music: false,
      sound: false,
      language: 0,
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
      level: 3,
    },
    {
      id: 3,
      name: "badro",
      birthday: 2002,
      score: 1000,
      avatar: 4,
      music: false,
      sound: false,
      language: 0,
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
      level: 3,
    },
    {
      id: 4,
      name: "hadjer",
      birthday: 2002,
      score: 10020,
      avatar: 3,
      music: false,
      sound: false,
      language: 0,
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
      level: 3,
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
