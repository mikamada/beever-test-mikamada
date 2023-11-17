import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuoteState {
	quote: string;
	favorites: string[];
	myQuotes: string[];
}

const initialState: QuoteState = {
	quote: "",
	favorites: [],
	myQuotes: [],
};

const quoteSlice = createSlice({
	name: "quotes",
	initialState,
	reducers: {
		addQuote: (state, action: PayloadAction<string>) => {
			state.myQuotes.push(action.payload);
		},
		setQuote: (state, action: PayloadAction<string>) => {
			state.quote = action.payload;
		},
		addFavorite: (state) => {
			const isQuoteInFavorites = state.favorites.includes(state.quote);
			if (!isQuoteInFavorites) {
				state.favorites.push(state.quote);
			} else {
				alert("Quote sudah ada di favorite");
			}
		},
	},
});

export const { addFavorite, setQuote, addQuote } = quoteSlice.actions;
export default quoteSlice.reducer;
