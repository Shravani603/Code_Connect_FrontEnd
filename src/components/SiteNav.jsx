import React from "react";
import { NavLink } from "react-router-dom";

function SiteNav() {
  return (
    <header className="siteNav">
      <div className="siteNavInner">
        <NavLink to="/" className="brand">
          <img src="/faicon (1).png" alt="Code Connect logo" />
          <span className="code">Code Connect</span>
        </NavLink>
        <nav className="navLinks">
          <NavLink to="/" end className={({ isActive }) => "navLink" + (isActive ? " active" : "")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => "navLink" + (isActive ? " active" : "")}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default SiteNav;
