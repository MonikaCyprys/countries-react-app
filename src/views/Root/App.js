import React from "react";
import "./App.scss";
import Navigation from "../../components/nav.js/nav";
import CountryWrapper from "../../components/countryWrapper.js/countryWrapper";
import CountryView from "./countryView/countryView";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.body = document.querySelector("body");
    this.body.setAttribute("data-theme", "light");
  }
  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={CountryWrapper} />
            <Route path="/country/:id"  component={CountryView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
