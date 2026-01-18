import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        language: "en"
    },
    reducers: {
        switchLanguage: (state, action) => {
            state.language = action.payload
        },
    }
})
export const { switchLanguage } = configSlice.actions

export default configSlice.reducer;
