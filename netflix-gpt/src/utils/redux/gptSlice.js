import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        recommendations: {},
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, tmdbMovieResults } = action.payload;
            state.recommendations.movieNames = movieNames;
            state.recommendations.tmdbMovieResults = tmdbMovieResults;
        },
    },
});

export const { toggleGPTSearchView, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
