import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { searchResultsSliceActions } from "../../store/SearchResultsSlice";
import { useLocation } from "react-router-dom";
import './SearchCountry.scss'
const SearchCountry = ({ searchStart, searchEnd }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [enteredInput, setEnteredInput] = useState("");
  const [blurState, setBlurState] = useState(false)
  const history = useHistory();
  const darkTheme = useSelector((state) => state.theme.darkTheme)

  const dispatch = useDispatch();

 
  const api = async() => {
      try{
        const res = await fetch(`https://restcountries.com/v3.1/name/${enteredInput}`)
        if(res.status!==200){
            dispatch(searchResultsSliceActions.setStatus('error'))
            return
        }
       const data = await res.json()
     
       if(data.length===0){
        dispatch(searchResultsSliceActions.setStatus('error'))
        return
       }
      dispatch(searchResultsSliceActions.addResults(data))
      }
      catch(err){
       
          
      }
      
  }
  const handleInput = (e) => {
    setEnteredInput(e.target.value);
    history.push(`/home?search=${e.target.value}`);
  };

  const blurHandler = e => {
    setBlurState(true)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(searchResultsSliceActions.addResults([]));

      if (enteredInput !== "") {
        dispatch(searchResultsSliceActions.setStatus("loading"));
    
        api()
        
      }
     if(blurState && enteredInput===""){
      console.log('error')
      dispatch(searchResultsSliceActions.setStatus('error'))
     }
    
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredInput, blurState]);

  useEffect(() => {
    if (queryParams.has("search")) {
      if (queryParams.get("search") !== "") {
        setEnteredInput(queryParams.get("search"));
      }
    }
  }, [queryParams]);

  return (
    <div className={`search ${darkTheme ? 'dark-theme' : ''}`}>
      <form>
        <IoMdSearch />
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={handleInput}
          onBlur={blurHandler}
        />
      </form>
    </div>
  );
};

export default SearchCountry;
