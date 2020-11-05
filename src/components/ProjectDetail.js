import React from "react";
import "../stylesheets/projectdetail.scss";
import uparrow from "../images/up-arrow.svg";
import { Link } from "react-router-dom";

const ProjectDetail = (props) => {
  // console.log(props);
  console.log(props.project.image);
  return (
    <section className="designproject">
      <div className="designproject__description">
        <div className="col">
          <div className="col__textBox">
            <h3>Client</h3>
            <p>{props.project.name}</p>
          </div>
          <div className="col__textBox">
            <h3>Project</h3>
            <p>{props.project.type}</p>
          </div>
        </div>
        <div className="col">
          <div className="col__textBox">
            <h3>Details</h3>
            <p>{props.project.name}</p>
          </div>
          <Link to="/projects">
            <div className="backArrowBox">
              <img
                className="backArrowBox__arrow"
                alt="back arrow"
                src={uparrow}
              ></img>
              <p className="backArrow__text">back to projects</p>
            </div>
          </Link>
        </div>
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
