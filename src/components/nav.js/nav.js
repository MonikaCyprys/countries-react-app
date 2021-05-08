import React from "react";
import styles from "./nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
const moonIcon = <FontAwesomeIcon icon={faMoon} />;

class Navigation extends React.Component {
  handleSwitcher() {
    document.querySelector(`[data-theme="light"]`)
      ? document.body.setAttribute("data-theme", "dark")
      : document.body.setAttribute("data-theme", "light");
  }
  render() {
    return (
      <nav className={styles.AppNav}>
        <h1>Where in the world?</h1>
        <button
          onClick={this.handleSwitcher}
          className={styles.SwitchModeButton}
        >
          {moonIcon} Dark Mode
        </button>
      </nav>
    );
  }
}

export default Navigation;
