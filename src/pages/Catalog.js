import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Catalog extends Component {
  render() {
    return (
      <div>
        <div>
          Page One
        </div>
        <Link className="cat-link" to="/">
          Home
        </Link>
      </div>
    );
  }
}