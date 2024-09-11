import React from "react";
import "../../scss/media.scss";
import "./countryWrapper.module.scss";
import CountryCard from "./countryCard/countryCard";
import Header from "../../components/header.js/header";

class CountryWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.changeRegion = this.changeRegion.bind(this);
    this.searchCountries = this.searchCountries.bind(this);
    this.state = {
      flags: [],
      region: "/all",
      newCountries: [],
      inputValue: null,
    };
  }

  componentDidMount() {
    var regions = `https://restcountries.com/v2${this.state.region}`;

    fetch(regions)
      .then((r) => r.json())
      .then((r) =>
        this.setState(() => ({
          flags: [...r],
        }))
      );
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.region !== this.state.region) {
      this.componentDidMount(this.state.region);
    }
  }
  changeRegion(region) {
    const checkWchichRegion = region === "/all" ? region : `/region/${region}`;
    this.setState(() => ({
      region: checkWchichRegion,
    }));
  }
  searchCountries(e) {
    const allFlags = [...this.state.flags];
    const inputValue = e.target.value.toLowerCase();
    let newCountries = allFlags.filter((country) => {
      return country.name.toLowerCase().includes(inputValue) ? country : null;
    });
    this.setState(() => ({
      newCountries: [...newCountries],
      inputValue: inputValue,
    }));
  }
  render() {
    const { flags, region, newCountries } = this.state;
    const countries =
      newCountries.length === 0 || this.state.inputValue.length === 0
        ? flags
        : newCountries;
    return (
      <>
        <Header
          handleCountries={this.searchCountries}
          region={region}
          changeRegion={this.changeRegion}
        />
        <main>
          {countries.map((item) => (
            <CountryCard key={item.name} {...item} />
          ))}
        </main>
      </>
    );
  }
}

export default CountryWrapper;
