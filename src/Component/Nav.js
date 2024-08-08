import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../Data/Data.json";
import "../App.css";
const contactLogoPC = data.contactLogo.contactPC.map(
  ({ hrefPC, title, alt, src }, index) => (
    <div key={index}>
      <a className="contactLogoMobil" href={hrefPC}>
        <img className="nav-contact" title={title} src={src} alt={alt} />
      </a>
    </div>
  )
);
const contactLogoMobil = data.contactLogo.contactMobil.map(
  ({  hrefMobil, title, alt, src }, index) => (
    <div className="phone-email" key={index}>
      <a className="contactLogoMobil" href={hrefMobil}>
        <img className="nav-contact" title={title} src={src} alt={alt} />
      </a>
    </div>
  )
);
export default class Nav extends Component {
  render() {
    const {
      general: { title },
    } = data;

    return (
      <div className="nav-main">
        <h1 className="holder">{title}</h1>

        <div className="nav-flex phone-email-nav">
          <h1 className="navTitle">{title}</h1>
          <section className="phone-email-search">
            <div className="contactPc">{contactLogoPC}</div>
            <div className="contactPhone">{contactLogoMobil}</div>
            <section className="dropdown">
              <button className="dropbtn">
                <img
                  title="Hamburger"
                  className="hamCss"
                  src="./pic/588a64e7d06f6719692a2d11.png"
                  alt="hamburger"
                />
              </button>
              <div className="dropdown-content">
                <Link className="link" to="/">
                  Home
                </Link>
                <Link className="link" to="/catalog">
                  Catalog
                </Link>
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </div>
            </section>
          </section>
        </div>
      </div>
    );
  }
}
