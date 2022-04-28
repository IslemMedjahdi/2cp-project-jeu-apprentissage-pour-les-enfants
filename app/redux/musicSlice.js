import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const musicSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMusic: (state, action) => {
      state.value = action.payload.sound;
    },
  },
});

export const { setMusic, playMusic, pauseMusic } = musicSlice.actions;
export default musicSlice.reducer;
