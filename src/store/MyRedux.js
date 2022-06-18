import { configureStore } from "@reduxjs/toolkit";
import countryDetailsSlice from "./CountryDetailsSlice";
import regionSlice from "./RegionSlice";
import searchResultsSlice from "./SearchResultsSlice";
import themSlice from "./ThemeSlice";


const store = configureStore({
    reducer:{
        region: regionSlice.reducer,
        results: searchResultsSlice.reducer,
        countryDetails: countryDetailsSlice.reducer,
        theme: themSlice.reducer
    }
})

export default store;