import React from "react";
import { Link } from "react-router-dom";
import styles from "./countryCard.module.scss";
const CountryCard = ({ name, population, region, capital, flag }) => (
  <Link className={styles.countryLink} to={`/country/${name}`}>
    <section className={styles.countryContainer}>
      <div className={styles.countryFlag}>
        <img src={flag} alt={`${name} flag`} />
      </div>
      <article className={styles.countryInfo}>
        <h2 className={styles.countryName}>{name}</h2>
        <p>
          Population: <span className={styles.population}>{population}</span>
        </p>
        <p>
          Region: <span className={styles.region}>{region}</span>
        </p>
        <p>
          Capital: <span className={styles.capital}>{capital}</span>
        </p>
      </article>
    </section>
  </Link>
);

export default CountryCard;
