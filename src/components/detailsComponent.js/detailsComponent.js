import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
const arrowBack = <FontAwesomeIcon icon={ faLongArrowAltLeft } />;

const DetailsComponent = () => (
    <main className="showDetails">
        <button className="goBackIcon">
            {arrowBack} Back
        </button>
        <section className="country-container showDetails">
            <div className="country-flag showDetails"><img src="" alt=""/></div>
            <article className="country-info showDetails">
                <h2 className="country-name">Germany</h2>
               <div> <p>Native name: <span className="native-name">Belgie</span></p>
                    <p>Population: <span className="population">81,13903</span></p>
                    <p>Region: <span className="region">Europe</span></p>
                    <p>Native name: <span className="sub-region">west europe</span></p>
                    <p>Capital: <span className="capital">Berlin</span></p>
                </div>
                <div>
                    <p className="separate-line">Top level domain: <span className="domain">.be</span></p>
                    <p>Currencies: <span className="currencies">euro</span></p>
                    <p>Languages: <span className="languages">germany, dutch, french</span></p>
                </div>
                <div className="borders">
                    <a href="#" className="border">belgia</a>
                    <a href="#" className="border">borneo</a>
                    <a href="#" className="border">bibubabu</a>
                </div>
            </article>
        </section>
    </main>
);


export default DetailsComponent;