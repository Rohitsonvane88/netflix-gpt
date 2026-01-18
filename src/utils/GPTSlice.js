import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        suggestedMovies: []
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addAISuggestedMovies: (state, action) => {
            state.suggestedMovies = action.payload
        }
    }
})

export const { toggleGPTSearchView, addAISuggestedMovies } = GPTSlice.actions;
export default GPTSlice.reducer;