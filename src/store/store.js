import { configureStore } from "@reduxjs/toolkit";
import songs from "../features/playlist/playlistSlice";

export default configureStore({
  reducer: {
    playlist: songs,
  },
});
