import React from "react";
import styles from "./selectRegion.module.scss";
import RegionListItem from "./regionListItem/RegionListItem";
class SelectRegion extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuRegion = this.handleMenuRegion.bind(this);
    this.state = {
      toggle: false,
    };
  }

  handleMenuRegion() {
    this.setState(() => ({
      toggle: !this.state.toggle,
    }));
  }

  checkRegion(e) {
    const region = e.target;
    const initValue = document.querySelector(".init")
      ? document.querySelector(".init")
      : document.querySelector(".region");
    initValue.textContent = region.textContent;
  }
  render() {
    return (
      <div className={styles.select}>
        <ul onClick={this.handleMenuRegion} className={styles.ContinentSelect}>
          {this.props.arrow}
          <li onClick={this.checkRegion} className="init">
            Filter by Region
          </li>
          <RegionListItem
            state={this.state.toggle}
            checkRegion={this.checkRegion}
            value="Africa"
          />
          <RegionListItem
            state={this.state.toggle}
            checkRegion={this.checkRegion}
            value="America"
          />
          <RegionListItem
            state={this.state.toggle}
            checkRegion={this.checkRegion}
            value="Asia"
          />
          <RegionListItem
            state={this.state.toggle}
            checkRegion={this.checkRegion}
            value="Europe"
          />
          <RegionListItem
            state={this.state.toggle}
            checkRegion={this.checkRegion}
            value="Oceania"
          />
        </ul>
      </div>
    );
  }
}

export default SelectRegion;
