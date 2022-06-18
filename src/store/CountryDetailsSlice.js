import { createSlice } from "@reduxjs/toolkit";

const countryDetailsSlice = createSlice({
    name: 'countryDetails',
    initialState: {countryDetails: {}},
    reducers:{
        showCountryDetails(state, action){
            state.countryDetails = action.payload
        }
    }
})

export const countryDetailsSliceActions = countryDetailsSlice.actions

export default countryDetailsSlice