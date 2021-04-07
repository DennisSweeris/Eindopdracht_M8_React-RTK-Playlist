import { createSlice } from "@reduxjs/toolkit";
import songsArray from "../songsArray";

const songFormSlice = createSlice({
  name: "playlist",
  initialState: songsArray,
  reducers: {
    addSong: (state, action) => {
      console.log("push");
      state.push(action.payload);
    },
  },
});

export const { addSong } = songFormSlice.actions;
export default songFormSlice.reducer;
