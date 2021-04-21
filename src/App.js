import React from "react";
import Navigation from "./components/nav.js/nav";
import Header from "./components/header.js/header";
import CountryWrapper from "./components/countryWrapper.js/countryWrapper";
import DetailsComponent from "./components/detailsComponent.js/detailsComponent"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <CountryWrapper />
      {/* <DetailsComponent /> */}
    </div>
  );
}

export default App;