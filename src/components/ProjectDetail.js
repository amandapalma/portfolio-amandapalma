import React from "react";
import "../stylesheets/projectdetail.scss";
import uparrow from "../images/up-arrow.svg";

// import lemur1 from "../images/lemur-1.jpg";

const ProjectDetail = (props) => {
  // console.log(props);
  return (
    <section className="designproject">
      <div className="designproject__description">
        <div className="col1">
          <h3 className="title">Client</h3>
          <p className="details">{props.project.name}</p>
          <h3 className="title">Project</h3>
          <p className="details">{props.project.type}</p>
        </div>
        <div className="col2">
          <h3 className="title">Details</h3>
          <p className="details">{props.project.name}</p>
        </div>
      </div>
   
        <div className="arrowBox">
          <a href="#projects" className="backArrow">
            <img
              className="backArrow__arrow "
              alt="back arrow"
              src={uparrow}
            ></img>
            <p className="backArrow__text">back to projects</p>
          </a>
        </div>
  
      <div className="designproject__imageContainer">
        <img
          className="designproject__imageContainer__projectImage"
          src={props.project.image}
          alt="project figure"
        ></img>
      </div>
      
    </section>
  );
};

export default ProjectDetail;
