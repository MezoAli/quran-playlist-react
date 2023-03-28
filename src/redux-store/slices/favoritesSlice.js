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
			});
			const tempURLslist = state.favoritesList.map((item) => {
				return `${item.Server}/${("00" + item.id).slice(-3)}.mp3`;
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
