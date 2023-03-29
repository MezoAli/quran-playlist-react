import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	favoritesList: [],
	favoritesURLs: [],
	activePlayer: {},
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavorites(state, action) {
			const findChapter = state.favoritesList.find((item) => {
				return item.id === action.payload.chapter.id;
			});
			if (findChapter) {
				return;
			}
			state.favoritesList.push({
				...action.payload.reciter,
				...action.payload.chapter,
				audioURL: `${action.payload.reciter.Server}/${(
					"00" + action.payload.chapter.id
				).slice(-3)}.mp3`,
			});
			const tempURLslist = state.favoritesList.map((item) => {
				return item.audioURL;
			});

			state.favoritesURLs = tempURLslist;
		},
		removeFromFavorites(state, action) {
			const tempList = state.favoritesList.filter((item) => {
				return item.id !== action.payload;
			});

			state.favoritesList = tempList;
		},
		setActivePlayer(state, action) {
			const audioUrl = action.payload.audioUrl;
			const activePlayer = state.favoritesList.find((item) => {
				return item.audioURL === audioUrl;
			});
			state.activePlayer = activePlayer;
		},
	},
});

export const { addToFavorites, removeFromFavorites, setActivePlayer } =
	favoritesSlice.actions;

export default favoritesSlice.reducer;
