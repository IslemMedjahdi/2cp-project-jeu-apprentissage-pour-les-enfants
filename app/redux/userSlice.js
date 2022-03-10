import { createSlice } from "@reduxjs/toolkit";

/*
  @Todo Define all attributes of a user
  sugg: 
    name : string  , login? : boolean , email : string ,    

*/

const initialState = {
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
