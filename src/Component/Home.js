import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../Data/Data.json";
const logo = data.logo.map(({ title, alt, src }, index) => (
  <div key={index} className="home-logo-container">
    <img title={title} className="home-logo" src={src} alt={alt} />
  </div>
));
const item = data.items.map(
  (
    {
      product1,
      aboutServiceOne,
      idOne,
      // title,
      // alt,
      // src,
      linkOne
     
    },
    index
  ) => (
    <div key={index} className="">
      <div>
        <section className="buttonHome">
          {/* <div>{product1}</div> */}
          <Link id={idOne} className="musicButton" to={linkOne}>
          {/* <img title={title} className="item-pic-about" src={src} alt={alt} /> */}
          <div className="insideLook"><div className="productButton">{product1}</div></div>
          </Link>
          <div>{aboutServiceOne}</div>
        </section>
</div>
    </div>
  )
);

export default class Home extends Component {
  render() {
    const {
      home: { title, about },
    } = data;

    return (
      <div className="home-main">
        <section>
          <div>{logo}</div>
        </section>
        <div className="homeBack">
        
        <h1 className="homeTitle">{title}</h1>
        <div className="home-about">{about}</div>
        </div>
        <section className="home-item-main">{item}</section>
      </div>
    );
  }
}
