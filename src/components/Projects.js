import React from "react";
import "../stylesheets/projects.scss";
import uparrow from "../images/up-arrow.svg";
import palmtree from "../images/palmtreeicon.png";

const Projects = () => {
    return ( <section className="section projects">
    <div className="titleBox">
      <h2 id="projects">projects</h2>
      <img
        className="palmtree sectionPalmtree"
        alt="palmtree"
        src={palmtree}
      ></img>
    </div>
    <ul className="workslist">
      <li className="project">
        <div className="project__cover">
          <div className="project__buttons">
            <button className="projectButton codeButton">
              <i className="fas fa-code"></i>
            </button>
            <button className="projectButton webButton">
              <i className="fas fa-globe"></i>
            </button>
          </div>
          <div className="project__description">
            <h4 className="proyectType">corporative website</h4>
            <h3 className="proyectName"> A-Team project</h3>
            <div className="techIcons">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-sass"></i>
            </div>
          </div>
        </div>
        <img
          className="project__image"
          alt="project"
          src="https://via.placeholder.com/400"
        ></img>
      </li>
      {/* TO DELETE */}
      <li className="project">
        <div className="project__cover">
          <div className="project__buttons">
            <button className="projectButton codeButton">
              <i className="fas fa-code"></i>
            </button>
            <button className="projectButton webButton">
              <i className="fas fa-globe"></i>
            </button>
          </div>
          <div className="project__description">
            <h4 className="proyectType">corporative website</h4>
            <h3 className="proyectName"> A-Team project</h3>
            <div className="techIcons">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-sass"></i>
            </div>
          </div>
        </div>
        <img
          className="project__image"
          alt="project"
          src="https://via.placeholder.com/400"
        ></img>
      </li>
      <li className="project">
        <div className="project__cover">
          <div className="project__buttons">
            <button className="projectButton codeButton">
              <i className="fas fa-code"></i>
            </button>
            <button className="projectButton webButton">
              <i className="fas fa-globe"></i>
            </button>
          </div>
          <div className="project__description">
            <h4 className="proyectType">corporative website</h4>
            <h3 className="proyectName"> A-Team project</h3>
            <div className="techIcons">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-sass"></i>
            </div>
          </div>
        </div>
        <img
          className="project__image"
          alt="project"
          src="https://via.placeholder.com/400"
        ></img>
      </li>
      <li className="project">
        <div className="project__cover">
          <div className="project__buttons">
            <button className="projectButton codeButton">
              <i className="fas fa-code"></i>
            </button>
            <button className="projectButton webButton">
              <i className="fas fa-globe"></i>
            </button>
          </div>
          <div className="project__description">
            <h4 className="proyectType">corporative website</h4>
            <h3 className="proyectName"> A-Team project</h3>
            <div className="techIcons">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-sass"></i>
            </div>
          </div>
        </div>
        <img
          className="project__image"
          alt="project"
          src="https://via.placeholder.com/400"
        ></img>
      </li>
      <li className="project">
        <div className="project__cover">
          <div className="project__buttons">
            <button className="projectButton codeButton">
              <i className="fas fa-code"></i>
            </button>
            <button className="projectButton webButton">
              <i className="fas fa-globe"></i>
            </button>
          </div>
          <div className="project__description">
            <h4 className="proyectType">corporative website</h4>
            <h3 className="proyectName"> A-Team project</h3>
            <div className="techIcons">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-sass"></i>
            </div>
          </div>
        </div>
        <img
          className="project__image"
          alt="project"
          src="https://via.placeholder.com/400"
        ></img>
      </li>
      <li className="project">
        <div className="project__cover">
          <div className="project__buttons">
            <button className="projectButton codeButton">
              <i className="fas fa-code"></i>
            </button>
            <button className="projectButton webButton">
              <i className="fas fa-globe"></i>
            </button>
          </div>
          <div className="project__description">
            <h4 className="proyectType">corporative website</h4>
            <h3 className="proyectName"> A-Team project</h3>
            <div className="techIcons">
              <i className="fab fa-js"></i>
              <i className="fab fa-react"></i>
              <i className="fab fa-css3-alt"></i>
              <i className="fab fa-html5"></i>
              <i className="fab fa-sass"></i>
            </div>
          </div>
        </div>
        <img
          className="project__image"
          alt="project"
          src="https://via.placeholder.com/400"
        ></img>
      </li>
      {/* TO DELETE */}
    </ul>
    <div className="arrowBox">
      <a href="#home" className="upArrow">
        <img
          className="upArrow__arrow"
          alt="up arrow"
          src={uparrow}
        ></img>
        <p className="upArrow__upText">up</p>
      </a>
    </div>
  </section>)};

    export default Projects;