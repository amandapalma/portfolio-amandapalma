import React from "react";
import resume from "../documents/Amanda Palma Front.pdf";
import "../stylesheets/header.scss";
import SSMMlinks from "./SSMMlinks.js";

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
            <SSMMlinks></SSMMlinks>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
