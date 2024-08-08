import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          Contacts
        </div>
        <Link className="contact-link" to="/">
          Home
        </Link>
      </div>
    );
  }
}