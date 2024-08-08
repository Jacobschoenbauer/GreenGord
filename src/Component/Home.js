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
      title,
      alt,
      src,
      linkOne,
      product2,
      idTwo,
      titleTwo,
      altTwo,
      srcTwo,
      aboutServiceTwo,
      linkTwo,
      product3,
      altThree,
      idThree,
      titleThree,
      srcThree,
      aboutServiceThree,
      linkThree,
    },
    index
  ) => (
    <div key={index} className="">
      <div>
        <section className="buttonHome">
          <div>{product1}</div>
          <Link id={idOne} className="" to={linkOne}>
            <img title={title} className="item-pic-about" src={src} alt={alt} />
          </Link>
          <div>{aboutServiceOne}</div>
        </section>
        <section className="buttonHome">
          <div>{product2}</div>
          <Link id={idTwo} className="" to={linkTwo}>
            <img title={titleTwo} className="item-pic-about" src={srcTwo} alt={altTwo} />
          </Link>
          <div>{aboutServiceTwo}</div>
        </section>
        <section className="buttonHome">
          <div>{product3}</div>
          <Link id={idThree} className="" to={linkThree}>
            <img
              title={titleThree}
              className="item-pic-about"
              src={srcThree}
              alt={altThree}
            />
          </Link>
          <div>{aboutServiceThree}</div>
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
        <section className="home-nav">
          <Link className="home-link" to="/">
            Home
          </Link>
          <Link className="home-link" to="/catalog">
            Catalog
          </Link>
          <Link className="home-link" to="/contact">
            Contact
          </Link>
        </section>
        <h1>{title}</h1>
        <div className="home-about">{about}</div>
        <section className="home-item-main">{item}</section>
      </div>
    );
  }
}
