import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => (
  <Link className="country-link" to="/country">
    <section className="country-container">
      <div className="country-flag">
        <img src="" alt="" />
      </div>
      <article className="country-info">
        <h2 className="country-name">{props.name}</h2>
        <p>
          Population: <span className="population">{props.population}</span>
        </p>
        <p>
          Region: <span className="region">{props.region}</span>
        </p>
        <p>
          Capital: <span className="capital">{props.capital}</span>
        </p>
      </article>
    </section>
  </Link>
);

export default CountryCard;
