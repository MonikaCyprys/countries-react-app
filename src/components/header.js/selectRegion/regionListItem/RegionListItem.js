import React from "react";
import styles from "./regionListItem.module.scss";
function RegionListItem({
  checkedRegion,
  chooseTheRegion,
  value,
  state,
  changeRegion,
  region,
}) {
  return (
    <li
      onClick={(e) => {
        chooseTheRegion((checkedRegion = e.target.textContent));
        changeRegion((region = checkedRegion));
      }}
      className={state ? styles.isActive : styles.region}
    >
      {value}
    </li>
  );
}

export default RegionListItem;
