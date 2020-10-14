import React from "react";
import poster from "../video/poster.png";
import Video from "../video/palmtrees3.mp4";
import "../stylesheets/comingsoon.scss";

function Comingsoon() {
  return (
    <div className="container">
      <h1 className="title">Coming soon</h1>
      <video autoPlay loop muted poster={poster} className="videoBG">
        <source src={Video} type="video/mp4"></source>
      </video>
      <div className="line"></div>
      <ul className="SSMM">
        <li className="link">
          <a
            href="https://github.com/amandapalma"
            alt="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://www.linkedin.com/in/amanda~palma/"
            alt="linkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://twitter.com/amandapalmaav"
            alt="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="mailto:amandapalma00@gmail.com"
            alt="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Comingsoon;
