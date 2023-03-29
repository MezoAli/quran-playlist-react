import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	favoritesList: [],
	favoritesURLs: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavorites(state, action) {
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
	},
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
