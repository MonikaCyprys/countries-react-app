import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./SearchCountry.module.scss";

const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const SearchCountry = ({ handleCountries }) => {
  return (
    <div className={styles.CountryChoice}>
      {searchIcon}
      <input
        type="search"
        placeholder="Search for a country..."
        name="Country"
        className={styles.country}
        onChange={handleCountries}
      />
    </div>
  );
};

export default SearchCountry;
