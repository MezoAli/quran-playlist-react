import { configureStore } from "@reduxjs/toolkit";
import recitersReducer from "./slices/reciterSlice";
import chapterSlice from "./slices/chapterSlice";

const store = configureStore({
	reducer: {
		reciters: recitersReducer,
		chapters: chapterSlice,
	},
});

export default store;
