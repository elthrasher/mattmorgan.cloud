import './nav.css';

import { faBars, faCloud, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <nav>
      <ul className="menu">
        <li className="logo">
          <Link aria-label="Matt Morgan's Cloud Stuff" to="/">
            <FontAwesomeIcon
              icon={faCloud}
              aria-hidden="true"
              className="fas fa-cloud"
            ></FontAwesomeIcon>
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
          <Link to="/appearances" onClick={() => setMenuOpen(false)}>
            Appearances
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
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggleMenu}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={toggleMenu}
            ></FontAwesomeIcon>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
