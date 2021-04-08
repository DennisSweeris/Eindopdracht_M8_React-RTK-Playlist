import { configureStore } from "@reduxjs/toolkit";
import songs from "../components/_Playlist/features/playlist/playlistSlice";

export default configureStore({
  reducer: {
    songlist: songs,
  },
});
