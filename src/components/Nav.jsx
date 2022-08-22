import React from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Navigation">
      <div className="row">
        <div className="nav__Wrapper">
          <h1 className="logo">ACROSSBORDERS</h1>
          <ul className="nav__items">
            <Link to="/" className="link">
              <li className="Home">Home</li>
            </Link>
            <Link to="/about-lakbay" className="link">
              <li>About</li>
            </Link>
            <Link to="/newsletter" className="link">
              <li>Newsletter</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
