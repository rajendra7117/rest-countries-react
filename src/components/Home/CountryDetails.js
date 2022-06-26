import React, { useEffect, useState } from "react";
import "./CountryDetails.scss";
import Wrapper from "../Layout/Wrapper";
import { useSelector } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import uuid from "react-uuid";
import Border from "./Border";

const CountryDetails = () => {
  const country = useSelector((state) => state.countryDetails.countryDetails);

  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [borderArray, setBorderArray] = useState([]);
  const history = useHistory();


  let borders;
  country.borders?.forEach((border) => {
    borders += `${border},`;
  });
  const fetchBorders = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${borders}`
    );
    if (!res.ok) {
      return;
    }
    const data = await res.json();
      if(data.length>6){
        setBorderArray(data.splice(0, 6))
        
      }
      else{
        setBorderArray(data);
      }
    
  };
  useEffect(() => {
    fetchBorders();
  }, []);

  return (
    <Wrapper>
      <div className={`country-details ${darkTheme ? "dark-theme" : ""}`}>
        <button className="back-button" onClick={() => history.push("/")}>
          <IoMdArrowBack />
          Back
        </button>
        <div className="flag-div">
          <img src={country.flags.png} alt="flag" />
        </div>
        <div>
          <div className="details-container">
            <div className="sec-1">
              <div className="part-1">
                <span>
                  <h1>
                    {typeof country.name === "object"
                      ? country.name.common
                      : country.name}
                  </h1>
                </span>
                <span>
                  <h4>Native Name:</h4>
                  {country.nativeName}
                </span>
                <span>
                  <h4>Population:</h4>
                  {country.population}
                </span>
                <span>
                  <h4>Sub Region:</h4>
                  {country.subregion}
                </span>
                <span>
                  <h4>Capital:</h4>
                  {country.capital}
                </span>
              </div>
              <div className="part-2">
                <span>
                  <h4>Top Level Domain:</h4>
                  {'topLevelDomain' in country ? country.topLevelDomain[0] : ''}
                </span>
                <span>
                  <h4>Currencies:</h4>
                  {country.currencies.length>0 && country.currencies.map((cur, index) => (
                    <span key={uuid()}>
                      {cur.name}
                      {`${index !== country.currencies.length - 1 ? "," : ""}`}
                    </span>
                  ))}
                </span>
                <span>
                  <h4>Languages:</h4>
                  {country.languageslength>0 && country.languages.map((lan, index) => (
                    <span key={uuid()}>
                      {lan.name}
                      {index !== country.languages.length - 1 ? "," : ""}
                    </span>
                  ))}
                </span>
              </div>
            </div>
            <div className="sec-2">
              <h4>Border Countries: </h4>
              <div>
              {borderArray?.map((border) => (
               <Border key={uuid()} border={border}/>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default React.memo(CountryDetails);
