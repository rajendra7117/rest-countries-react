import { createSlice } from "@reduxjs/toolkit";

const regionSlice = createSlice({
    name: 'regionSlice',
    initialState: {selectedRegion: ''},
    reducers:{
        selectRegion(state, action){
            state.selectedRegion = action.payload
        }
    }
})

export const regionSliceActions = regionSlice.actions

export default regionSlice;