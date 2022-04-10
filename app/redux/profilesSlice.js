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
    loadProfiles: (state, action) => {
      state.value = action.payload.profiles;
      AsyncStorageLib.setItem("profiles", JSON.stringify(state.value)).catch(
        (e) => console.warn(e)
      );
    },
    addProfileHandler: (state, action) => {
      state.value.push(action.payload.profile);
      AsyncStorageLib.setItem("profiles", JSON.stringify(state.value)).catch(
        (e) => console.warn(e)
      );
    },
    changeProfileHandler: (state, action) => {
      state.value=state.value.filter((profile)=>{
        return (profile.id!==action.payload.profile.id) ;
      })
      state.value.push(action.payload.profile);
      AsyncStorageLib.setItem("profiles", JSON.stringify(state.value)).catch(
        (e) => console.warn(e)
      );
    },
  },
});

export const { toggleMusic,changeProfileHandler, toggleSound, loadProfiles, addProfileHandler } =
  profilesSlice.actions;
export default profilesSlice.reducer;
