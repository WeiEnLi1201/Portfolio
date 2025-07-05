import React, { useState } from "react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleToggle = () => setNavActive(!navActive);
  const handleLinkClick = () => setNavActive(false);

  return (
    <header>
      <button id="menu-toggle" onClick={handleToggle}>
        ☰
      </button>
      <nav className={navActive ? "active" : ""}>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#education" onClick={handleLinkClick}>Education</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#experience" onClick={handleLinkClick}>Experience</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
