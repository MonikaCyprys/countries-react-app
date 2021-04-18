import React, { useState } from "react";

function SelectRegion(props) {
  const [toggle, setToggle] = useState(false);
  const toggler = () => {
    setToggle((prev) => !prev);
  };

  function checkRegion(e) {
    const region = e.target;
    const selectRegion = document.querySelector(".Continent-select");
    const initValue = selectRegion.querySelector(".init");
    initValue.textContent = region.textContent;
  }
  return (
    <div className="select">
      <ul onClick={toggler} className="Continent-select">
        {props.arrow}
        <li
          onClick={checkRegion}
          className={toggle ? "init isActive" : "init"}
          value=""
        >
          Filter by Region
        </li>
        <li
          onClick={checkRegion}
          className={toggle ? "region isActive" : "region"}
          value="Africa"
        >
          Africa
        </li>
        <li
          onClick={checkRegion}
          className={toggle ? "region isActive" : "region"}
          value="America"
        >
          America
        </li>
        <li
          onClick={checkRegion}
          className={toggle ? "region isActive" : "region"}
          value="Asia"
        >
          Asia
        </li>
        <li
          onClick={checkRegion}
          className={toggle ? "region isActive" : "region"}
          value="Europe"
        >
          Europe
        </li>
        <li
          onClick={checkRegion}
          className={toggle ? "region isActive" : "region"}
          value="Oceania"
        >
          Oceania
        </li>
      </ul>
    </div>
  );
}

export default SelectRegion;
