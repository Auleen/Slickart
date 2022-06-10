import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link style={{ textDecoration: "none", color: "aliceblue" }} to="/">
              Slickart
            </Link>
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
