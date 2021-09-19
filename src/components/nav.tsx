import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav>
      <ul className="menu">
        <li className="logo">
          <Link to="/">
            <i className="fas fa-cloud"></i>
          </Link>
        </li>
        <li className="title">
          <Link to="/">Matt Morgan's Cloud Stuff</Link>
        </li>
        <li className={`${menuOpen ? 'active ' : ''}item`}>
          <Link to="/posts" onClick={() => setMenuOpen(false)}>
            Blogposts
          </Link>
        </li>
        <li className={`${menuOpen ? 'active ' : ''}item`}>
          <Link to="/publications" onClick={() => setMenuOpen(false)}>
            Publications
          </Link>
        </li>
        <li className={`${menuOpen ? 'active ' : ''}item`}>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
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
