import React from "react";
import SelectRegion from "./selectRegion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const arrowIcon = <FontAwesomeIcon icon={faChevronDown} />;
const searchIcon = <FontAwesomeIcon icon={faSearch} />;

const Header = () => (
  <header className="Custom-searching">
    <div className="Country-choice">
      {searchIcon}
      <input
        type="search"
        placeholder="Search for a country..."
        name="Country"
        id="Country"
      />
    </div>
    <SelectRegion arrow={arrowIcon} />
  </header>
);

export default Header;
