import React from 'react'
import './Header.scss'
import {MdOutlineLightMode} from 'react-icons/md'
import {BsMoonFill} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { themeSliceActions } from '../../store/ThemeSlice'
import { searchResultsSliceActions } from '../../store/SearchResultsSlice'
import { NavLink} from 'react-router-dom'
const Header = () => {
const darkTheme = useSelector((state) => state.theme.darkTheme)

const dispatch = useDispatch()
const toggleTheme = e => {
        dispatch(themeSliceActions.toggleTheme())
}
  return (
    <div className={`header ${darkTheme ? 'dark-theme' : ''}`}>
        <NavLink to="/home" onClick={() => dispatch(searchResultsSliceActions.setStatus('completed'))}>Where in the world?</NavLink>
        <button onClick={toggleTheme}>{!darkTheme ? (<><BsMoonFill />Dark Mode</>) : (<><MdOutlineLightMode />Light Mode</>)}</button>
    </div>
  )
}

export default Header