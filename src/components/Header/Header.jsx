// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={`navbar navbar-expand-md navbar-dark ${styles.nav}`}>
      <div className="container">
        <NavLink className={`${styles.title} navbar-brand`} to="/">
          Tami Kazehare
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {" "}
            <NavItem to="/" exact>
              Home
            </NavItem>
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, children, exact }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={`${styles.navLink} nav-link`}
        activeClassName="active"
        to={to}
        exact={exact}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Header;
