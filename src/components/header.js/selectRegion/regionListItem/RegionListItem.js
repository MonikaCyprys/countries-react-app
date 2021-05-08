import React from "react";
import styles from "./regionListItem.module.scss";
function RegionListItem({ value, checkRegion, state }) {
  return (
    <li
      onClick={checkRegion}
      className={state ? styles.isActive : styles.region}
      value={value} 
    >
      {value}
    </li>
  );
}

export default RegionListItem;
