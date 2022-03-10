import { createSlice } from "@reduxjs/toolkit";

/*
  @Todo Define all attributes of profile
  sugg: 
    name : string, birthday: Date ,  score : int , avatar : string , music : boolean , son : noolean ,
    language : int [0,1,2] , badges : arr [ints] , levels   

*/

const initialState = {
  value: [
    {
      name: "Islem",
      birthday: { day: 5, month: 6, year: 2002 },
      score: 120,
      avatar: 0,
      music: false,
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
    addProfile: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    toggleMusic: (state, action) => {
      state.value[action.payload.selectedProfile].music =
        !state.value[action.payload.selectedProfile].music;
    },
    toggleSound: (state, action) => {
      state.value[action.payload.selectedProfile].sound =
        !state.value[action.payload.selectedProfile].sound;
    },
  },
});

export const { addProfile, toggleMusic, toggleSound } = profilesSlice.actions;
export default profilesSlice.reducer;
