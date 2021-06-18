import React from "react";
import DetailsComponent from "../../../components/detailsComponent.js/detailsComponent";
class CountryView extends React.Component {
  constructor(props) {
    super(props);
    this.changeCountry = this.changeCountry.bind(this);
    this.state = {
      data: {},
      allFlags: [],
      countryName: "",
    };
  }
  componentDidMount(countryID) {
    var countryIDs = countryID ? countryID : this.props.match.params.id;
    var countryName = `https://restcountries.eu/rest/v2/name/${countryIDs}`;
    console.log(countryID);
    if (countryID === undefined) {
      var all = `https://restcountries.eu/rest/v2/all`;
      fetch(all)
        .then((r) => r.json())
        .then((r) =>
          this.setState(() => ({
            allFlags: [...r],
          }))
        );
    }
    fetch(countryName)
      .then((r) => r.json())
      .then((r) =>
        this.setState(() => ({
          data: r[0],
        }))
      );
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.countryName !== this.state.countryName) {
      this.componentDidMount(this.state.countryName);
    }
  }
  changeCountry(countryName) {
    let singleCountryName = countryName;
    const index = countryName.indexOf(" (");
    if (index !== -1) {
      singleCountryName = countryName.slice(0, index);
    }
    if (this.state.data.name !== singleCountryName) {
      this.setState(() => ({
        countryName: singleCountryName,
      }));
    }
  }
  render() {
    return (
      <DetailsComponent
        changeCountryID={this.changeCountry}
        countryName={this.state.countryName}
        allFlags={this.state.allFlags}
        {...this.state.data}
      />
    );
  }
}

export default CountryView;
// name={this.state.data.name}
