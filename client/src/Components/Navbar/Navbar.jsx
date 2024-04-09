import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav aria-label="Navbar" className="navbar-wrap">
      <Link to="/">
        <h2 className="nav-name">Harsh Sharma</h2>
        <p className="basic-text-muted">
          Software Developer <br /> & Design Enthusiast
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
