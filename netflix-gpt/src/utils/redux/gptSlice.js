import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        recommendations: {
            movieNames: [],
            tmdbMovieResults: [],
        },
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            if (state.showGPTSearch) {
                state.recommendations.movieNames = [];
                state.recommendations.tmdbMovieResults = [];
            }
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
