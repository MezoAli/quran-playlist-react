import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modifiedChaptersList: [],
};

const chaptersSearchSlice = createSlice({
	name: "chaptersSearch",
	initialState,
	reducers: {
		searchChapter(state, action) {
			const tempList = action.payload.chapters.filter((chapter) =>
				chapter.name_simple
					.toLowerCase()
					.includes(action.payload.search.toLowerCase())
			);
			state.modifiedChaptersList = tempList;
		},
	},
});

export const { searchChapter } = chaptersSearchSlice.actions;

export default chaptersSearchSlice.reducer;
