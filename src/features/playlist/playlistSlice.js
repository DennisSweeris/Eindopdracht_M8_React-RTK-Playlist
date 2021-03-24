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
      console.log(current(state));
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
        song.genre = genre;
        song.rating = rating;
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
    sortSongsByTitle: state => {
      state.sort().reverse((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
      });
    },
    sortSongsByArtist: state => {
      state.sort().reverse((a, b) => {
        if (a.artist.toLowerCase() < b.artist.toLowerCase()) return -1;
        if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1;
        return 0;
      });
    },
    sortSongsByGenre: state => {
      state.sort().reverse((a, b) => {
        if (a.genre.toLowerCase() < b.genre.toLowerCase()) return -1;
        if (a.genre.toLowerCase() > b.genre.toLowerCase()) return 1;
        return 0;
      });
    },
    sortSongsByRating: state => {
      state.sort().reverse((a, b) => {
        if (a.rating.toLowerCase() < b.rating.toLowerCase()) return -1;
        if (a.rating.toLowerCase() > b.rating.toLowerCase()) return 1;
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
  sortSongsByTitle,
  sortSongsByArtist,
  sortSongsByGenre,
  sortSongsByRating,
} = playlistSlice.actions;
export default playlistSlice.reducer;
