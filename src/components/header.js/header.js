import React from "react";
import styles from "./header.module.scss";
import SelectRegion from "./selectRegion/selectRegion";
import SearchCountry from "./SearchCountry/SearchCountry";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const arrowIcon = <FontAwesomeIcon icon={faChevronDown} />;

const Header = ({ onsubmit, region, handleCountries }) => (
  <header className={styles.CustomSearching}>
    <SearchCountry handleCountries={handleCountries} />
    <SelectRegion region={region} onsubmit={onsubmit} arrow={arrowIcon} />
    <button className={styles.clearRegions}>ClearRegions</button>
  </header>
);

export default Header;
