import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modifiedRecitersList: [],
};

const reciterSearchSlice = createSlice({
	name: "reciterSearch",
	initialState,
	reducers: {
		searchReciter(state, action) {
			const tempList = action.payload.reciters.filter((reciter) =>
				reciter.name.toLowerCase().includes(action.payload.search.toLowerCase())
			);
			state.modifiedRecitersList = tempList;
		},
	},
});

export const { searchReciter } = reciterSearchSlice.actions;

export default reciterSearchSlice.reducer;
