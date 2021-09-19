import './footer.css';

import React from 'react';

const Footer = () => (
  <footer>
    <ul className="social">
      <li>
        <a href="https://twitter.com/NullishCoalesce?ref_src=twsrc%5Etfw">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/matt-morgan-0344a51/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/elthrasher">
          <i className="fab fa-github-square"></i>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
