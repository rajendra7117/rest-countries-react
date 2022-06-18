import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { countryDetailsSliceActions } from '../../store/CountryDetailsSlice'
const Country = ({country}) => {
  const dispatch = useDispatch()
  const history = useHistory()
const showCountryDetails = e => {
    history.push(`/${typeof country.name==="object" ? country.name.common : country.name}`)
    dispatch(countryDetailsSliceActions.showCountryDetails(country))
}
  return (
    <div className='country' onClick={showCountryDetails}>
        <div className='img-sec'>
            <img src={country.flags.png}alt="flag-img" />
        </div>
        <div className='details-sec'>
            <h3>{typeof country.name==="object" ? country.name.common : country.name}</h3>
            <span><h4>Popuplation:</h4><h5>{country.population}</h5></span>
            <span><h4>Region:</h4><h5>{country.region}</h5></span>
            <span><h4>Capital:</h4><h5>{country.capital}</h5></span>
        </div>
    </div>
  )
}

export default Country