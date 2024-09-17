import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; 2024 Aditya Pramod Dayma. All rights reserved.</p>
      <div className="social-icons">
        <a
          id="linkedin"
          href="https://www.linkedin.com/in/aditya-dayma/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          id="instagram"
          href="https://www.instagram.com/adityadayma4391/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          id="github"
          href="https://github.com/Aditya0596"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white mx-2"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
