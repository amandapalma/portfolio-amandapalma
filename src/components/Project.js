import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/project.scss";

const Project = (props) => {
  //GET ICONS
  const getBtn1 = (props) => {
    if (props.btn1 === "code")
      return (
        <a
          className="projectButton"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-code"></i>
        </a>
      );
    else if (props.btn1 === "eye")
      return (
        <Link to={`/project/ ${props.id}`} className="projectButton">
          {/* <a
            className="projectButton"
            href={`/project/ ${props.id}`}
            target="_blank"
            rel="noopener noreferrer"
          > */}
            <i className="fas fa-eye"></i>
          {/* </a>  */}
        </Link>
      );
  };
  console.log(props.github);
  const getBtn2 = (props) => {
    if (props.btn2 === "web")
      return (
        <a
          className="projectButton"
          href={props.web}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-globe"></i>
        </a>
      );
    else return "";
  };

  const getBtn3 = (props) => {
    if (props.btn3 === "surprise")
      return (
        <a
          className="projectButton"
          href={props.extra}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-surprise"></i>
        </a>
      );
    else return "";
  };

  const getTech1 = (props) => {
    if (props.tech1 === "HTML") return <i className="fab fa-html5"></i>;
    else if (props.tech1 === "CSS") return <i className="fab fa-css3-alt"></i>;
    else if (props.tech1 === "React") return <i className="fab fa-react"></i>;
    else if (props.tech1 === "JS") return <i className="fab fa-js"></i>;
    else if (props.tech1 === "Sass") return <i className="fab fa-sass"></i>;
    else if (props.tech1 === "Pencil") return <i className="fas fa-pen"></i>;
    else if (props.tech1 === "PH")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-photoshop.png"
          alt="photoshop icon"
        />
      );
    else if (props.tech1 === "IL")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-illustrator.png"
          alt="illustrator icon"
        />
      );
    else if (props.tech1 === "IN")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-indesign.png"
          alt="indesign icon"
        />
      );
  };
  const getTech2 = (props) => {
    if (props.tech2 === "HTML") return <i className="fab fa-html5"></i>;
    else if (props.tech2 === "CSS") return <i className="fab fa-css3-alt"></i>;
    else if (props.tech2 === "React") return <i className="fab fa-react"></i>;
    else if (props.tech2 === "JS") return <i className="fab fa-js"></i>;
    else if (props.tech2 === "Sass") return <i className="fab fa-sass"></i>;
    else if (props.tech2 === "Pencil") return <i className="fas fa-pen"></i>;
    else if (props.tech2 === "PH")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-photoshop.png"
          alt="photoshop icon"
        />
      );
    else if (props.tech2 === "IL")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-illustrator.png"
          alt="illustrator icon"
        />
      );
    else if (props.tech2 === "IN")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-indesign.png"
          alt="indesign icon"
        />
      );
  };
  const getTech3 = (props) => {
    if (props.tech3 === "HTML") return <i className="fab fa-html5"></i>;
    else if (props.tech3 === "CSS") return <i className="fab fa-css3-alt"></i>;
    else if (props.tech3 === "React") return <i className="fab fa-react"></i>;
    else if (props.tech3 === "JS") return <i className="fab fa-js"></i>;
    else if (props.tech3 === "Sass") return <i className="fab fa-sass"></i>;
    else if (props.tech3 === "Pencil") return <i className="fas fa-pen"></i>;
    else if (props.tech3 === "PH")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-photoshop.png"
          alt="photoshop icon"
        />
      );
    else if (props.tech3 === "IL")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-illustrator.png"
          alt="illustrator icon"
        />
      );
    else if (props.tech3 === "IN")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-indesign.png"
          alt="indesign icon"
        />
      );
  };
  const getTech4 = (props) => {
    if (props.tech4 === "HTML") return <i className="fab fa-html5"></i>;
    else if (props.tech4 === "CSS") return <i className="fab fa-css3-alt"></i>;
    else if (props.tech4 === "React") return <i className="fab fa-react"></i>;
    else if (props.tech4 === "JS") return <i className="fab fa-js"></i>;
    else if (props.tech4 === "Sass") return <i className="fab fa-sass"></i>;
    else if (props.tech4 === "Pencil") return <i className="fas fa-pen"></i>;
    else if (props.tech4 === "PH")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-photoshop.png"
          alt="photoshop icon"
        />
      );
    else if (props.tech4 === "IL")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-illustrator.png"
          alt="illustrator icon"
        />
      );
    else if (props.tech4 === "IN")
      return (
        <img
          src="https://img.icons8.com/material/20/ffffff/adobe-indesign.png"
          alt="indesign icon"
        />
      );
  };

  //PAINT
  return (
    <li className="project">
      <img className="project__image" alt="project" src={props.image}></img>
      <div className="project__cover">
        <div className="project__buttons">
          {getBtn1(props)}
          {getBtn2(props)}
          {getBtn3(props)}
        </div>
        <div className="project__description">
          <h4 className="proyectType">{props.type}</h4>
          <h3 className="proyectName"> {props.name}</h3>
          <div className="techIconBox">
            {getTech1(props)}
            {getTech2(props)}
            {getTech3(props)}
            {getTech4(props)}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
