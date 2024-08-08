import React, { Component } from "react";
import data from "../Data/Data.json";

const logo = data.logo.map(({ title, alt, src }, index) => (
  <img key={index} title={title} className="logo-footer" src={src} alt={alt} />
));

export default class Footer extends Component {
  render() {
    const {
      general: { title, location },
    } = data;
    return (
      <div className="footer">
        <div className="footer-grid">
          <h2 className="title-footer font-footer">{title}</h2>
          <div className="footer-image-logo">{logo}</div>
          <section>
            <div className="word-location font-footer">Location</div>
            <div className="location-footer font-footer">{location}</div>
          </section>
          
        </div>
        <section className="my-footer">
          <p className="bottom-footer">Web page designed by</p>
          <a
            className="find-footer"
            href="https://incomparable-blancmange-b01d4d.netlify.app/"
          >
            Schoenbauer Consulting Group
          </a>
        </section>
      </div>
    );
  }
}
