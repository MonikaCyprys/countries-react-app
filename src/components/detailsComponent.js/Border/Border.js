import React from "react";
import styles from "./Border.module.scss";
import { Link } from "react-router-dom";
const Border = ({ allFlagsProps, bord, changeCountryID, countryName }) => {
  bord = bord && Array.isArray(bord) ? bord : [];
  let allFlags = allFlagsProps ? allFlagsProps : [];
  let matchesBorders = [];
  for (let i = 0; i < allFlags.length; i++) {
    if (bord.includes(allFlags[i].alpha3Code)) {
      matchesBorders.push(allFlags[i].name);
    }
  }

  return matchesBorders.map((border) => (
    <Link to={`/country/${border}`}>
      <h3
        key={border.toString()}
        onClick={(e) => changeCountryID((countryName = e.target.textContent))}
        className={styles.border}
      >
        {border}
      </h3>
    </Link>
  ));
};
export default Border;
