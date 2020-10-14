import React from "react";
import "../stylesheets/projectslist.scss";
import Project from "./Project.js";
import uparrow from "../images/up-arrow.svg";
import palmtree from "../images/palmtreeicon.png";

const ProjectsList = (props) => {
  
  const projectList = props.projects.map(project=>{return <Project  type={"type"} name="A-Team Project"></Project>;});
console.log(props);
  return (


    <section className="section projects">
      <div className="titleBox">
        <h2 id="projects">projects</h2>
        <img
          className="palmtree sectionPalmtree"
          alt="palmtree"
          src={palmtree}
        ></img>
      </div>
      <ul className="workslist">
        {projectList}
      </ul>
      <div className="arrowBox">
        <a href="#home" className="upArrow">
          <img className="upArrow__arrow" alt="up arrow" src={uparrow}></img>
          <p className="upArrow__upText">up</p>
        </a>
      </div>
    </section>
  );
};

export default ProjectsList;
