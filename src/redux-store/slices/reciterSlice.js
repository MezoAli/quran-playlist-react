import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getReciters = createAsyncThunk(
	"reciters/getReciters",
	async () => {
		const res = await fetch("https://mp3quran.net/api/_english.php");
		const data = await res.json();
		return data.reciters;
	}
);

const initialState = {
	reciters: [],
	loading: false,
};

const reciterSlice = createSlice({
	name: "reciters",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getReciters.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getReciters.fulfilled, (state, action) => {
			state.loading = false;
			state.reciters = action.payload;
		});
	},
});

// export const {} = reciterSlice.actions;

export default reciterSlice.reducer;
