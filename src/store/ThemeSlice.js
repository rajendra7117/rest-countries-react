import { createSlice } from "@reduxjs/toolkit";

const themSlice = createSlice({
    name: 'themeSlice',
    initialState: {darkTheme: false},
    reducers:{
        toggleTheme(state, action){
            state.darkTheme = !state.darkTheme
        }
    }

})

export const themeSliceActions = themSlice.actions

export default themSlice;