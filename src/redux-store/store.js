import { configureStore } from "@reduxjs/toolkit";
import recitersReducer from "./slices/reciterSlice";
import chapterReducer from "./slices/chapterSlice";
import reciterSearchReducer from "./slices/reciterSearchSlice";
import chapterSearchReducer from "./slices/chapterSearchSlice";
import favoritesReducer from "./slices/favoritesSlice";

const store = configureStore({
	reducer: {
		reciters: recitersReducer,
		chapters: chapterReducer,
		searchReciter: reciterSearchReducer,
		searchChapter: chapterSearchReducer,
		favorites: favoritesReducer,
	},
});

export default store;
