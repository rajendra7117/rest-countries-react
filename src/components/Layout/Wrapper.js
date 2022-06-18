import React from 'react'
import { useSelector } from 'react-redux'
import './Wrapper.scss'
const Wrapper = ({children}) => {
  const darkTheme = useSelector((state) => state.theme.darkTheme)
  return (
    <div className={`wrapper ${darkTheme ? 'dark-theme' : ''}`}>
        {children}
    </div>
  )
}

export default Wrapper