import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEye,
  faGlobe,
  faSurprise,
  faReact,
  faJs,
  faCss3,
  faSass,
  faHtml5,
 
} from "@fortawesome/free-solid-svg-icons";
import "../stylesheets/project.scss";

const Project = (props) => {
  const getIcon1 = (props) => {
    if (props.btn1 === "code") return <FontAwesomeIcon icon={faCode} />;
    else if (props.btn1 === "eye") return <FontAwesomeIcon icon={faEye} />;
  };

  const getIcon2 = (props) => {
    if (props.btn2 === "web") return <FontAwesomeIcon icon={faGlobe} />;
    else return "";
  };

  const getIcon3 = (props) => {
    if (props.btn3 === "surprise") return <FontAwesomeIcon icon={faSurprise} />;
    else return "";
  };

  // const getTech = (props) => {
  //   const tech = props.tech1 || props.tech2 || props.tech3 || props.tech4;
  //   if (tech === "HTML") return <FontAwesomeIcon icon={faCode} />;
  //   else if (tech === "CSS") return <FontAwesomeIcon icon={faEye} />;
  //   else if (tech === "React") return <FontAwesomeIcon icon={faGlobe} />;
  //   else if (tech === "React") return "react icon";
  // };
  

 

  return (
    <li className="project">
      <img className="project__image" alt="project" src={props.image}></img>
      <div className="project__cover">
        <div className="project__buttons">
          {/* <Link to={`/project/ ${props.id}`}> */}
            <button className="projectButton btn1">{getIcon1(props)}</button>
          {/* </Link> */}
          <button className="projectButton btn2">{getIcon2(props)}</button>
          <button className="projectButton btn3">{getIcon3(props)}</button>
        </div>
        <div className="project__description">
          <h4 className="proyectType">{props.type}</h4>
          <h3 className="proyectName"> {props.name}</h3>
          <div className="techIcons">
            {/* {props.tech1} {props.tech2} {props.tech3} {props.tech4} */}
            {/* {getTech(props)} */}
            
  
            {/* <i className="fab fa-js"></i>
            <i className="fab fa-react"></i>
            <i className="fab fa-css3-alt"></i>
            <i className="fab fa-html5"></i>
            <i className="fab fa-sass"></i> */}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
