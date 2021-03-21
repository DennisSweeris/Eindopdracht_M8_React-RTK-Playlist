import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "songs",
  initialState: [
    { title: "Imagine", artist: "John Lennon", genre: "Pop", rating: "★★★★★" },
    { title: "Hellfire", artist: "Jonathan Young", genre: "Metal", rating: "★★★★★" },
  ],

  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});
export const { addSong, removeSong } = playlistSlice.actions;
export default playlistSlice.reducer;
