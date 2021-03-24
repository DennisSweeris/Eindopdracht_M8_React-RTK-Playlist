import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "songs",
  initialState: [
    { title: "Imagine", artist: "John Lennon", genre: "Pop", rating: "★★★★★", editing: false },
    {
      title: "Hellfire",
      artist: "Jonathan Young",
      genre: "Metal",
      rating: "★★★★★",
      editing: false,
    },
  ],

  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },

    removeSong: (state, action) => {
      state.splice(action.payload, 1);
    },
    editSong: (state, action) => {
      const song = state[action.payload];
      song.editing = true;
    },
    updateSong: {
      reducer(state, action) {
        const { title, artist, genre, rating, index } = action.payload;
        const song = state[index];
        song.title = title;
        song.artist = artist;
        // song.genre = genre;
        // song.rating = rating;
        song.editing = false;
      },
      prepare(title, artist, index) {
        return { payload: { title, artist, index } };
      },
    },
    cancelEdit: (state, action) => {
      const song = state[action.payload];
      song.editing = false;
    },
    sortSongs: (state, action) => {
      state.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
    },
  },
});
export const {
  addSong,
  removeSong,
  editSong,
  updateSong,
  cancelEdit,
  sortSongs,
} = playlistSlice.actions;
export default playlistSlice.reducer;
