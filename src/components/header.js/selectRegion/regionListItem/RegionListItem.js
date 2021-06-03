import React from "react";
import styles from "./regionListItem.module.scss";
function RegionListItem({ value,  state, onsubmit, region }) {
  return (
    <li
      onClick={(e) => onsubmit((region = `region/${e.target.textContent}`))}
      className={state ? styles.isActive : styles.region}
      value={value}
    >
      {value}
    </li>
  );
}

export default RegionListItem;
