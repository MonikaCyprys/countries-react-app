import React from "react";
import styles from "./nav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const moonIcon = <FontAwesomeIcon icon={faMoon} />;
const sunIcon = <FontAwesomeIcon icon={faSun} />;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightMode: true };
    this.handleSwitcher = this.handleSwitcher.bind(this);
  }
  handleSwitcher() {
    this.setState(() => ({
      lightMode: !this.state.lightMode,
    }));
  }
  componentDidMount() {
    if (this.state.lightMode) {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.lightMode !== this.state.lightMode) {
      this.componentDidMount(this.state.lightMode);
    }
  }
  render() {
    const { lightMode } = this.state;
    let buttonContent;
    if (lightMode) {
      buttonContent = " Dark Mode";
    } else {
      buttonContent = " Light Mode";
    }
    return (
      <nav className={styles.AppNav}>
        <h1>Where in the world?</h1>
        <button
          onClick={this.handleSwitcher}
          className={styles.SwitchModeButton}
        >
          {lightMode ? moonIcon : sunIcon}
          {buttonContent}
        </button>
      </nav>
    );
  }
}

export default Navigation;
