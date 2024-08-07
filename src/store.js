import { configureStore } from "@reduxjs/toolkit";
import watchListReducer from "./features/watchListSlice"

// initializing redux store with configureStore
// gives us access to everything we set up in our slices (in this case, our watch list movie data)
export const store = configureStore({
    reducer: {
        watchList: watchListReducer
    }
})