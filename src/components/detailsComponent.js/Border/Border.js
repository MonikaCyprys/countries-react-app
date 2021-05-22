import React from "react";
import styles from "./Border.module.scss";
const Border = (props) => {
  let { bord } = props;
  bord = bord && Array.isArray(bord) ? bord : [];
  return bord.map((border) => <h3 className={styles.border}>{border}</h3>);
};
export default Border;
