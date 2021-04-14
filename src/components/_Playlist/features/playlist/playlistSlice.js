import { createSlice } from "@reduxjs/toolkit";
import songsArray from "../songsArray";

const playlistSlice = createSlice({
  name: "songlist",
  initialState: songsArray,

  reducers: {
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },

    removeSong: (state, action) => {
      state.songs.splice(action.payload, 1);
    },

    editSong: (state, action) => {
      const song = state.songs[action.payload];
      song.editing = true;
    },

    updateSong: {
      reducer(state, action) {
        const { title, artist, genre, rating, index } = action.payload;
        const song = state.songs[index];
        song.title = title || song.title;
        song.artist = artist || song.artist;
        song.genre = genre || song.genre;
        song.rating = rating || "★";
        song.editing = false;
      },
      prepare(title, artist, genre, rating, index) {
        return { payload: { title, artist, genre, rating, index } };
      },
    },
    cancelEdit: (state, action) => {
      const song = state.songs[action.payload];
      song.editing = false;
    },

    sortSongsAscending: (state, action) => {
      const sortBy = action.payload;
      state.songs.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    },

    sortSongsDescending: (state, action) => {
      const sortBy = action.payload;
      state.songs.sort((b, a) => a[sortBy].localeCompare(b[sortBy]));
    },
  },
});
export const {
  addSong,
  removeSong,
  editSong,
  updateSong,
  cancelEdit,
  sortSongsByTitle,
  sortSongsByArtist,
  sortSongsByGenre,
  sortSongsByRating,
  sortSongsAscending,
  sortSongsDescending,
} = playlistSlice.actions;
export default playlistSlice.reducer;
