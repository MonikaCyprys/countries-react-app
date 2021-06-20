import React from "react";
import "./App.scss";
import Navigation from "../../components/nav.js/nav";
import CountryWrapper from "../../components/countryWrapper.js/countryWrapper";
import CountryView from "./countryView/countryView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.body = document.querySelector("body");
    this.body.setAttribute("data-theme", "light");
  }
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <>
          <Navigation />
          <Switch>
            <Route exact path="/" component={CountryWrapper} />
            <Route path="/country/:id" component={CountryView} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
