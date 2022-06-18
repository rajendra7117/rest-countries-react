import React from 'react'
import './Header.scss'
import {MdOutlineLightMode} from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { themeSliceActions } from '../../store/ThemeSlice'
const Header = () => {
const darkTheme = useSelector((state) => state.theme.darkTheme)
const dispatch = useDispatch()
const toggleTheme = e => {
        dispatch(themeSliceActions.toggleTheme())
}
  return (
    <div className={`header ${darkTheme ? 'dark-theme' : ''}`}>
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme}><MdOutlineLightMode />Dark Mode</button>
    </div>
  )
}

export default Header