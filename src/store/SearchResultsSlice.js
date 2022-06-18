import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
    name: 'searchResultsSlice',
    initialState: {searchStatus:'', searchResults:[]},
    reducers:{
        setStatus(state, action){
            state.searchStatus = action.payload
        },
        addResults(state, action){
            state.searchStatus = 'completed'
            state.searchResults = action.payload
        }
    }
})

export const searchResultsSliceActions = searchResultsSlice.actions

export default searchResultsSlice;