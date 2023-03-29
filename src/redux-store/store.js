import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recitersReducer from "./slices/reciterSlice";
import chapterReducer from "./slices/chapterSlice";
import reciterSearchReducer from "./slices/reciterSearchSlice";
import chapterSearchReducer from "./slices/chapterSearchSlice";
import favoritesReducer from "./slices/favoritesSlice";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

const config = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	reciters: recitersReducer,
	chapters: chapterReducer,
	searchReciter: reciterSearchReducer,
	searchChapter: chapterSearchReducer,
	favorites: favoritesReducer,
});

const reducer = persistReducer(config, rootReducer);

const store = configureStore({
	reducer: reducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export default store;
