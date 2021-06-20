import React from "react";
import styles from "./selectRegion.module.scss";
import RegionListItem from "./regionListItem/RegionListItem";
class SelectRegion extends React.Component {
  constructor(props) {
    super(props);
    this.handleMenuRegion = this.handleMenuRegion.bind(this);
    this.chooseTheRegion = this.chooseTheRegion.bind(this);

    this.state = {
      toggle: false,
      checkedRegion: "Filter by Region",
    };
  }

  handleMenuRegion() {
    this.setState(() => ({
      toggle: !this.state.toggle,
    }));
  }
  chooseTheRegion(checkedRegion) {
    this.setState(() => ({
      checkedRegion: checkedRegion,
    }));
  }

  render() {
    const { checkedRegion } = this.state;
    return (
      <div onClick={this.handleMenuRegion} className={styles.select}>
        <ul className={styles.ContinentSelect}>
          {this.props.arrow}
          <li className="init">{checkedRegion}</li>
          <RegionListItem
            changeRegion={this.props.changeRegion}
            region={this.props.region}
            state={this.state.toggle}
            chooseTheRegion={this.chooseTheRegion}
            value="africa"
          />
          <RegionListItem
            changeRegion={this.props.changeRegion}
            region={this.props.region}
            state={this.state.toggle}
            chooseTheRegion={this.chooseTheRegion}
            value="americas"
          />
          <RegionListItem
            changeRegion={this.props.changeRegion}
            region={this.props.region}
            state={this.state.toggle}
            chooseTheRegion={this.chooseTheRegion}
            value="asia"
          />
          <RegionListItem
            changeRegion={this.props.changeRegion}
            region={this.props.region}
            state={this.state.toggle}
            chooseTheRegion={this.chooseTheRegion}
            value="europe"
          />
          <RegionListItem
            changeRegion={this.props.changeRegion}
            region={this.props.region}
            state={this.state.toggle}
            chooseTheRegion={this.chooseTheRegion}
            value="oceania"
          />
        </ul>
      </div>
    );
  }
}

export default SelectRegion;
