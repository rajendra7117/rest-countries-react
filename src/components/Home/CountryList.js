import React, { memo, useState, useEffect } from "react";
import Country from "./Country";
import { useSelector } from "react-redux";
import './CountryList.scss'
import uuid from 'react-uuid'

const CountryList = ({ list }) => {
  const region = useSelector((state) => state.region.selectedRegion);
  const [countryList, setCountryList] = useState([]);
  const darkTheme = useSelector((state) => state.theme.darkTheme)

  useEffect(() => {
    if (region !== "" && region!=='All') {
      let filteredList = list.filter((country) => country.region === region);
      setCountryList(filteredList);
    }
    if(region==='All'){
      setCountryList(list)
    }
   
  }, [region]);

  useEffect(() => {
    if (list.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
          });
        },
        {
          threshold: 0.5,
        }
      );
      let entries = document.querySelectorAll(".country");
      entries.forEach((entry) => {
        observer.observe(entry);
      });
    }
  }, [list, countryList, darkTheme]);

  return (
    <div className={`countries-list ${darkTheme ? 'dark-theme' : ''}`}>
      {region === '' || null || region==='All'
        ? list?.map((country) => (
            <Country key={uuid()} country={country} />
          ))
        : countryList?.map((country) => (
            <Country key={uuid()} country={country} />
          ))}
    </div>
  );
};

export default memo(CountryList);
