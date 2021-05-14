import React, { Component } from "react";
import "../../scss/media.scss";
import "./countryWrapper.module.scss";
import CountryCard from "./countryCard/countryCard";
import Header from "../../components/header.js/header";
// import { countriesData } from "../../data/countriesData";

class CountryWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: [],
    };
  }
  componentDidMount() {
    var all = "https://restcountries.eu/rest/v2/all";

    fetch(all)
      .then((r) => r.json())
      .then((r) =>
        this.setState((state) => ({
          flags: [...state.flags, ...r],
        }))
      );
  }
  render() {
    const {flags} = this.state;
    return (
      <>
        <Header />
        <main>
          {flags.map((item) => (
            <CountryCard key={item.name} {...item} />
          ))}
        </main>
      </>
    );
  }
}

export default CountryWrapper;
