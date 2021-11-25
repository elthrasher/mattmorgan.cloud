import './footer.css';

import React from 'react';
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer>
    <ul className="social">
      <li>
        <a
          aria-label="twitter"
          href="https://twitter.com/NullishCoalesce?ref_src=twsrc%5Etfw"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            icon={faTwitterSquare}
          ></FontAwesomeIcon>
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/matt-morgan-0344a51/"
        >
          <FontAwesomeIcon
            aria-hidden="true"
            icon={faLinkedin}
          ></FontAwesomeIcon>
        </a>
        <a aria-label="github" href="https://github.com/elthrasher">
          <FontAwesomeIcon
            aria-hidden="true"
            icon={faGithubSquare}
          ></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
