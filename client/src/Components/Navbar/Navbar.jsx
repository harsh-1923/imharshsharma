import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar" aria-label="Navbar" className="navbar-wrap">
      <Link to="/">
        <h2 id="top" className="nav-name">
          Harsh Sharma
        </h2>
        <p className="basic-text-muted">
          Software Developer <br /> & Design Enthusiast
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
