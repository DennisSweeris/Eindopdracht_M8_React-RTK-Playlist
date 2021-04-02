import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
import songsArray from "../songsArray";

const playlistSlice = createSlice({
  name: "playlist",
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
        console.log(state.artist);
        const { title, artist, genre, rating, index } = action.payload;
        const song = state.songs[index];
        song.title = title;
        song.artist = artist;
        song.genre = genre;
        song.rating = rating;
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

    // TODO - Figure out how to refactor into a single dynamic function
    sortSongsByTitle: (state, action) => {
      console.log(action);
      action.payload === "ascending"
        ? state.songs.sort((a, b) => a.title.localeCompare(b.title))
        : state.songs.sort((b, a) => a.title.localeCompare(b.title));
      return state;
    },

    sortSongsByArtist: (state, action) => {
      action.payload === "ascending"
        ? state.songs.sort((a, b) => a.artist.localeCompare(b.artist))
        : state.songs.sort((b, a) => a.artist.localeCompare(b.artist));
      return state;
    },

    sortSongsByGenre: (state, action) => {
      action.payload === "ascending"
        ? state.songs.sort((a, b) => a.genre.localeCompare(b.genre))
        : state.songs.sort((b, a) => a.genre.localeCompare(b.genre));
      return state;
    },
    sortSongsByRating: (state, action) => {
      action.payload === "ascending"
        ? state.songs.sort((a, b) => a.rating.localeCompare(b.rating))
        : state.songs.sort((b, a) => a.rating.localeCompare(b.rating));
      return state;
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
} = playlistSlice.actions;
export default playlistSlice.reducer;