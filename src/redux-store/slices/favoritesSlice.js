import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	favoritesList: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		addToFavorites(state, action) {
			console.log(action.payload);
			state.favoritesList.push({
				...action.payload.reciter,
				...action.payload.chapter,
			});
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
