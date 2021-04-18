import React from "react";
import CountryCard from "./countryCard";
import { countriesData } from "../../data/countriesData";
const CountryWrapper = () => (
  <main>
    {countriesData.map((item) => (
      <CountryCard key={item.name} {...item} />
    ))}
  </main>
);

export default CountryWrapper;
//
