import React, { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomePage.scss";
import Wrapper from "../Layout/Wrapper";

import Loader from "../UI/Loader";
import CountryList from "./CountryList";
import SearchCountry from "./SearchCountry";
import Filter from "./Filter";
const HomePage = () => {
  const [countries, setCountries] = useState([]);

  const results = useSelector((state) => state.results.searchResults);

  const status = useSelector((state) => state.results.searchStatus);

  const location = useLocation();
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const queryParams = new URLSearchParams(location.search);

  const api = async () => {
    const res = await fetch("https://restcountries.com/v2/all");
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {
    api();
  }, []);

  let content;

  if (status === "loading") {
    content = <Loader />;
  }
  if (status === "error") {
    content = <h1>Sorry no results found, please check your query</h1>;
  }
  if (status === "completed") {
    content = <CountryList list={results} />;
  }

  return (
    <Wrapper>
      <div className={`home-page ${darkTheme ? "dark-theme" : ""}`}>
        <div className="sec-1">
          <SearchCountry />
          <Filter />
        </div>
        {!queryParams.has("search") ? (
          <>
            {status === "error" ? (
              <h1>Sorry something went wrong, please reload page</h1>
            ) : (
              <>
                {" "}
                {countries.length > 0 ? (
                  <CountryList list={countries} />
                ) : (
                  <Loader />
                )}{" "}
              </>
            )}
          </>
        ) : (
          <>{content}</>
        )}
      </div>
    </Wrapper>
  );
};

export default memo(HomePage);
