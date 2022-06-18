import React, {useState, memo, useEffect} from 'react'
import {FiChevronDown} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { regionSliceActions } from '../../store/RegionSlice'
import { useHistory, useLocation } from 'react-router-dom'
const Filter = () => {
    const [showOptions, setShowOptions] = useState(false)
    const history =useHistory()
    const location = useLocation()
    const [currentRegion, setCurrentRegion] = useState('')
   const queryParams =  new URLSearchParams(location.search)
   const darkTheme = useSelector((state) => state.theme.darkTheme)


    const dispatch = useDispatch()
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'All'];
    const toggleOptions = e => {
        e.preventDefault()
        setShowOptions(prev => !prev)
    }
    const selectRegion = (region,e) => {
        e.preventDefault()
        dispatch(regionSliceActions.selectRegion(region))
        setCurrentRegion(region)
        history.push(`/home?sort=${region}`)

        setShowOptions(false)
    }

    useEffect(() => {
      if(queryParams.has('sort')){
        
        if(queryParams.get('sort')!==currentRegion){
          setCurrentRegion(queryParams.get('sort'))
          dispatch(regionSliceActions.selectRegion(queryParams.get('sort')))
        }
        
      }
        
    }, [queryParams, location])


  return (
    <form className={`filter ${darkTheme ? 'dark-theme' : ''}`} name='filter' >
        <button className='main-btn' onClick={toggleOptions}>Filter by region  <FiChevronDown />
        </button>
        <div className={`options ${showOptions ? 'active' : ''}`}>
        {regions.map((region) => <button key={region} onClick={selectRegion.bind(this, region)}>{region}</button>)}
        </div>
    </form>
  )
}

export default memo(Filter)