import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getChapters = createAsyncThunk(
	"chapters/getChapters",
	async () => {
		const res = await fetch("https://api.quran.com/api/v4/chapters");
		const data = await res.json();
		return data.chapters;
	}
);

const initialState = {
	chapters: [],
	loading: false,
};

const chapterSlice = createSlice({
	name: "chapters",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getChapters.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getChapters.fulfilled, (state, action) => {
			state.loading = false;
			state.chapters = action.payload;
		});
	},
});

// export const {} = reciterSlice.actions;

export default chapterSlice.reducer;
