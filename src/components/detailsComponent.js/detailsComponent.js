import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import styles from "./detailsComponent.module.scss";
const arrowBack = <FontAwesomeIcon icon={faLongArrowAltLeft} />;

const DetailsComponent = ({
  name,
  nativeName,
  flag,
  population,
  region,
  subregion,
  capital,
  domain,
  cur,
  languages,
}) => (
  <main className={styles.details}>
    <Link to="/">
      <button className={styles.goBackIcon}>{arrowBack} Back</button>
    </Link>
    <section className={styles.countryContainer}>
      <div className={styles.countryFlag}>
        <img src={flag} alt="" />
      </div>
      <article className={styles.countryInfo}>
        <h2 className={styles.countryName}>{name}</h2>
        <div>
          <p>
            Native name: <span className={styles.nativeName}>{nativeName}</span>
          </p>
          <p>
            Population: <span className={styles.population}>{population}</span>
          </p>
          <p>
            Region: <span className={styles.region}>{region}</span>
          </p>
          <p>
            Native name: <span className={styles.subRegion}>{subregion}</span>
          </p>
          <p>
            Capital: <span className={styles.capital}>{capital}</span>
          </p>
        </div>
        <div className="secondInfo">
          <p>
            Top level domain: <span className={styles.domain}>{domain}</span>
          </p>
          <p>
            Currencies: <span className={styles.currencies}>{cur}</span>
          </p>
          <p>
            Languages:
            <span className={styles.languages}>germany, dutch, french</span>
          </p>
        </div>
        <div className={styles.borders}>
          <Link to="/" className={styles.border}>
            belgia
          </Link>
          <Link to="/" className={styles.border}>
            borneo
          </Link>
          <Link to="/" className={styles.border}>
            bibubabu
          </Link>
        </div>
      </article>
    </section>
  </main>
);

export default DetailsComponent;