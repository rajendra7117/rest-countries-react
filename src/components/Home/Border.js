import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { countryDetailsSliceActions } from '../../store/CountryDetailsSlice'
const Border = ({border}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const showCountryDetails = e => {
        history.push(`/${typeof border.name==="object" ? border.name.common : border.country.name}`)
        dispatch(countryDetailsSliceActions.showCountryDetails(border))
    }

  return (
    <span className="border" key={border.name.common} onClick={showCountryDetails}>
    {border.name.common}
  </span>
  )
}

export default Border