import React from "react";
// import logo from './logo.svg';
// import ItemList from "./ItemList";
// import dataFromApi from "../data/data";
import Video from "../video/palmtrees3.mp4";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <h1 className="title">Coming soon</h1>
      <div className="vidContainer">
        <video
          autoPlay
          loop
          muted
          poster="/src/video/poster.png"
          className="videoBG"
        >
          <source src={Video} type="video/mp4"></source>
        </video>
      </div>
      <ul className="SSMM">
        <li>
          <a
            href="https://github.com/amandapalma"
            alt="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/amanda~palma/"
            alt="linkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/amandapalmaav"
            alt="twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:amandapalma00@gmail.com"
            alt="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
