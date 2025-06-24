import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css"

function Header() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/about" className="nav-link">About</NavLink>
      <NavLink to="/contact" className="nav-link">Contact</NavLink>
    </nav>
  );
}

export default Header;
