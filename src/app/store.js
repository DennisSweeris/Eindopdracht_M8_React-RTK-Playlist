import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counter/counterSlice";
import songs from "../features/playlist/playlistSlice";

export default configureStore({
  reducer: {
    counter,
    songs,
  },
});
