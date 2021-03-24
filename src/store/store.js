import { configureStore } from "@reduxjs/toolkit";
import counter from "../features/counter/counterSlice";
import songs from "../features/playlist/playlistSlice";

export default configureStore({
  reducer: {
    // counter,
    // sort,
    songs,
  },
});

// export const createAppStore = preloadedState => {
//   return configureStore({
//     reducer: {
//       songs,
//     },
//     preloadedState,
//   });
// };

// export default createAppStore();
