import React from "react";
import styles from "./header.module.scss";
import SelectRegion from "./selectRegion/selectRegion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const arrowIcon = <FontAwesomeIcon icon={faChevronDown} />;
const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Header = () => (
  <header className={styles.CustomSearching}>
    <div className={styles.CountryChoice}>
      {searchIcon}
      <input
        type="search"
        placeholder="Search for a country..."
        name="Country"
        className={styles.Country}
      />
    </div>
    <SelectRegion arrow={arrowIcon} />
  </header>
);

export default Header;
