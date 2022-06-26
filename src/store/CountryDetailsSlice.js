import { createSlice } from "@reduxjs/toolkit";

const countryDetailsSlice = createSlice({
    name: 'countryDetails',
    initialState: {countryDetails: localStorage.getItem('CountryDetails') ? JSON.parse(localStorage.getItem('CountryDetails')) : {}},
    reducers:{
        showCountryDetails(state, action){
            state.countryDetails = action.payload
            localStorage.setItem('CountryDetails', JSON.stringify(state.countryDetails))
        }
    }
})

export const countryDetailsSliceActions = countryDetailsSlice.actions

export default countryDetailsSlice