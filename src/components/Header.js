import React from "react";
import resume from "../documents/Amanda Palma Front.pdf";
import "../stylesheets/header.scss";

const Header = () => {
  return (
    <header>
      <nav role="navigation">
        <div className="menuToggle">
          <input className="menuToggle__closeIcon" type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul className="menuToggle__menu">
            <li className="option">
              <a href="#projects" alt="go to projects">
                projects
              </a>
            </li>
            <li className="option">
              <a href="#about" alt="go to about section">
                about
              </a>
            </li>
            <li className="option">
              <a href="#contact" alt="go to contact section">
                contact
              </a>
            </li>
            <li className="option">
              <a
                alt="download resume"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                resume
              </a>
            </li>
            <li className="ssmmIcon">
              <i className="fab fa-github"></i>
            </li>
            <li className="ssmmIcon">
              <i className="fab fa-linkedin-in"></i>
            </li>
            <li className="ssmmIcon">
              <i className="fas fa-mobile-alt"></i>
            </li>
            <li className="ssmmIcon">
              <i className="fas fa-envelope"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
