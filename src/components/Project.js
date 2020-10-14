import React from "react";
import "../stylesheets/project.scss";

const Project = (props) => {

    // console.log(props);
  return (
    <li className="project" >
      <div className="project__cover">
        <div className="project__buttons">
          <button className="projectButton btn1">
            <i className="fas fa-code"></i> <i className="fas fa-eye"></i>
          </button>
          <button className="projectButton btn2">
            <i className="fas fa-globe"></i>
          </button>
          <button className="projectButton btn3">
            <i className="fas fa-surprise"></i>
          </button>
        </div>
        <div className="project__description">
          <h4 className="proyectType">{props.type}</h4>
          <h3 className="proyectName"> {props.name}</h3>
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
  );
};

export default Project;
