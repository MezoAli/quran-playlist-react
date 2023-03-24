import { configureStore } from "@reduxjs/toolkit";
import recitersReducer from "./slices/reciterSlice";

const store = configureStore({
	reducer: {
		reciters: recitersReducer,
	},
});

export default store;
