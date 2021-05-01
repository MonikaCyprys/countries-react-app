import React from "react";
import Navigation from "../../components/nav.js/nav";
import Header from "../../components/header.js/header";
import CountryWrapper from "../../components/countryWrapper.js/countryWrapper";
import CountryView from "./countryView/countryView";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import DetailsComponent from "./components/detailsComponent.js/detailsComponent"
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <Header />
          <Switch>
            <Route exact path="/" component={CountryWrapper} />
            <Route exact path="/country" component={CountryView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
