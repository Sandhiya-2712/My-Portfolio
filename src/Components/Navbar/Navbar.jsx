import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onNavClick, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Call parent's onNavClick on item click
  const handleClick = (section) => {
    onNavClick(section);
    setMenuOpen(false); // close menu on mobile
  };

  return (
    <div className="navbar">
      <div className="logo">Sandhiya</div>

      {/* Hamburger menu icon */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleClick("home")}
        >
          Home
        </li>
        <li
          className={activeSection === "about" ? "active" : ""}
          onClick={() => handleClick("about")}
        >
          About Me
        </li>
        <li
          className={activeSection === "skill" ? "active" : ""}
          onClick={() => handleClick("skill")}
        >
          Skill
        </li>
        <li
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleClick("projects")}
        >
          Projects
        </li>
        <li
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleClick("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
