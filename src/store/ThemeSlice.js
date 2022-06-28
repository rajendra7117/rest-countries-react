import { createSlice } from "@reduxjs/toolkit";

const themSlice = createSlice({
    name: 'themeSlice',
    initialState: {darkTheme: localStorage.getItem('rest-theme') ? JSON.parse(localStorage.getItem('rest-theme')) : false},
    reducers:{
        toggleTheme(state, action){
            state.darkTheme = !state.darkTheme
            localStorage.setItem('rest-theme', JSON.stringify(state.darkTheme))
        }
    }

})

export const themeSliceActions = themSlice.actions

export default themSlice;