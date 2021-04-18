import React from "react";
import Navigation from "./components/nav.js/nav";
import Header from "./components/header.js/header";
import CountryWrapper from "./components/countryWrapper.js/countryWrapper";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <CountryWrapper />
    </div>
  );
}

export default App;