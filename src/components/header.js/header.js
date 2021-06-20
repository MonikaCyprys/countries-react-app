import React from "react";
import styles from "./header.module.scss";
import SelectRegion from "./selectRegion/selectRegion";
import SearchCountry from "./SearchCountry/SearchCountry";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const arrowIcon = <FontAwesomeIcon icon={faChevronDown} />;

const Header = ({ changeRegion, region, handleCountries }) => {
  return (
    <header className={styles.CustomSearching}>
      <SearchCountry handleCountries={handleCountries} />
      <SelectRegion region={region} changeRegion={changeRegion} arrow={arrowIcon} />
      <button
        onClick={(e) => changeRegion((region = "/all"))}
        className={styles.clearRegions}
      >
        Clear regions
      </button>
    </header>
  );
};

export default Header;
