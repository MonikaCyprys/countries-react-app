import React from "react";
import "../../scss/media.scss";
import "./countryWrapper.module.scss";
import CountryCard from "./countryCard/countryCard";
import Header from "../../components/header.js/header";

class CountryWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.changeRegion = this.changeRegion.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      flags: [],
      region: "all",
    };
  }

  componentDidMount() {
    var all = `https://restcountries.eu/rest/v2/${this.state.region}`;
    console.log(all);

    fetch(all)
      .then((r) => r.json())
      .then((r) =>
        this.setState((state) => ({
          flags: [...r], //? [...state.flags, ...r]
        }))
      );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.region !== this.state.region) {
      this.componentDidMount(this.state.region);
    }
  }
  changeRegion(region) {
    this.setState(() => ({
      region: region,
    }));
  }
  render() {
    console.log(this.state.region);
    console.log(document.querySelector(".country"));
    const { flags, region } = this.state;
    return (
      <>
        <Header region={region} onsubmit={this.changeRegion} />
        <main>
          {flags.map((item) => (
            <CountryCard key={item.nativeName} {...item} />
          ))}
        </main>
      </>
    );
  }
}

export default CountryWrapper;
