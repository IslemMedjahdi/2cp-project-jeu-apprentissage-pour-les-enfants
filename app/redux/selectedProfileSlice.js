import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0, // index of the selected profile
};

export const selectedProfile = createSlice({
  name: "selectedProfile",
  initialState,
  reducers: {
    setSelectedProfile: (state, action) => {
      state.value = action.payload.index;
    },
  },
});

export const { setSelectedProfile } = selectedProfile.actions;
export default selectedProfile.reducer;
