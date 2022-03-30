import { createSlice } from "@reduxjs/toolkit";

/*
  @Todo Define all attributes of a user
  sugg: 
    name : string  , login? : boolean , email : string ,    

*/

const initialState = {
  value: {
    name: "islem",
    language: 2,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeLanguageUser: (state) => {
      if (state.value.language < 2) state.value.language++;
      else state.value.language = 0;
    },
  },
});

export const { changeLanguageUser } = userSlice.actions;
export default userSlice.reducer;
