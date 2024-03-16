import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignUp from "./Auth/SignUp";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={`navbar wrapper ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">
          <h1>Reading Matters</h1>
        </Link>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="https://github.com/ishitaraina1807/Reading-Matters">
            <span>About</span>
          </a>
          <a href="https://github.com/ishitaraina1807" target="_blank">
            <span>Contact</span>
          </a>

          <a href="SignUp" target="_blank">
            <span>Signup</span>
          </a>

          


        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
}
