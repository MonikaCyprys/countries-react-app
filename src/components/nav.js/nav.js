import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
const moonIcon = <FontAwesomeIcon icon={faMoon} />;

const Navigation = () => (
  <nav className="App-nav">
    <h1>Where in the world?</h1>
    <button className="Switch-mode-button">{moonIcon} Dark Mode</button>
  </nav>
);

export default Navigation;
