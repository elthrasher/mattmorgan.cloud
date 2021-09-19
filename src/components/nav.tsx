import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav>
      <ul className="menu">
        <li className="logo">
          <a href="#">
            <i className="fas fa-cloud"></i>
          </a>
        </li>
        <li className="title">
          <a href="#">Matt Morgan's Cloud Stuff</a>
        </li>
        <li className={`${menuOpen ? 'active ' : ''}item`}>
          <a href="#">Blogposts</a>
        </li>
        <li className={`${menuOpen ? 'active ' : ''}item`}>
          <a href="#">Publications</a>
        </li>
        <li className={`${menuOpen ? 'active ' : ''}item`}>
          <a href="#">Projects</a>
        </li>
        <li className="toggle">
          {menuOpen ? (
            <i className="fas fa-times" onClick={toggleMenu}></i>
          ) : (
            <i className="fas fa-bars" onClick={toggleMenu}></i>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
