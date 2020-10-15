import React from "react";
import "../stylesheets/projectslist.scss";
import Project from "./Project.js";
import uparrow from "../images/up-arrow.svg";
import palmtree from "../images/palmtreeicon.png";

const ProjectsList = (props) => {
  // console.log(props);
  const projectList = props.projects.map((project) => {
    console.log(project.tech.a);
    return (
      <Project
        key={project.id}
        btn1={project.button1}
        btn2={project.button2}
        btn3={project.button3}
        image={project.image}
        type={project.type}
        name={project.name}
        tech1={project.tech.a}
        tech2={project.tech.b}
        tech3={project.tech.c}
        tech4={project.tech.d}
      ></Project>
    );
  });

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
      <ul className="workslist">{projectList}</ul>
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





