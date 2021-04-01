import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";

const songsArray = [
  { title: "Imagine", artist: "John Lennon", genre: "Pop", rating: "★★★★", editing: false },
  { title: "Hellfire", artist: "Jonathan Young", genre: "Metal", rating: "★★★★★", editing: false },
  {
    title: "Kleine Oneindigheid",
    artist: "Marco Borsato",
    genre: "Nederlandstalig",
    rating: "★★★",
    editing: false,
  },
  { title: "Sound of Silence", artist: "Disturbed", genre: "Metal", rating: "★★", editing: false },
];

const playlistSlice = createSlice({
  name: "songs",
  initialState: songsArray,

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
        console.log(state.artist);
        // const { title, artist, genre, rating, index } = action.payload;
        // const song = state[index];
        // song.title = title;
        // song.artist = artist;
        // song.genre = genre;
        // song.rating = rating;
        // song.editing = false;
      },
      prepare(title, artist, index) {
        return { payload: { title, artist, index } };
      },
    },
    cancelEdit: (state, action) => {
      const song = state[action.payload];
      song.editing = false;
    },

    // console.log(current(state)); // Logs current state - readable
    // console.log(action); // Logs current action
    // TODO - Figure out how to refactor into a single dynamic function
    sortSongsByTitle: (state, action) => {
      console.log(action);
      action.payload === "ascending"
        ? state.sort((a, b) => a.title.localeCompare(b.title))
        : state.sort((b, a) => a.title.localeCompare(b.title));
      return state;
    },

    sortSongsByArtist: (state, action) => {
      action.payload === "ascending"
        ? state.sort((a, b) => a.artist.localeCompare(b.artist))
        : state.sort((b, a) => a.artist.localeCompare(b.artist));
      return state;
    },

    sortSongsByGenre: (state, action) => {
      action.payload === "ascending"
        ? state.sort((a, b) => a.genre.localeCompare(b.genre))
        : state.sort((b, a) => a.genre.localeCompare(b.genre));
      return state;
    },
    sortSongsByRating: (state, action) => {
      action.payload === "ascending"
        ? state.sort((a, b) => a.rating.localeCompare(b.rating))
        : state.sort((b, a) => a.rating.localeCompare(b.rating));
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
  sortSongsBy,
} = playlistSlice.actions;
export default playlistSlice.reducer;
