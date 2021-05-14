import React from "react";
import DetailsComponent from "../../../components/detailsComponent.js/detailsComponent";
class CountryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    var country = `https://restcountries.eu/rest/v2/name/${this.props.match.params.id}`;
    fetch(country)
      .then((r) => r.json())
      .then((r) =>
        this.setState(() => ({
          data: r[0],
        }))
      );
  }
  render() {
    return <DetailsComponent {...this.state.data} />;
  }
}

export default CountryView;
// name={this.state.data.name}
