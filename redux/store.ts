import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "@/redux/slice/quoteSlice";

export const store = configureStore({
	reducer: {
		quotes: quoteReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;