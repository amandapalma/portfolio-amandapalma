import React from "react";
import "../stylesheets/projectdetail.scss";
// import lemur1 from "../images/lemur-1.jpg";

const ProjectDetail = (props) => {
  console.log(props);
  return (
    <section className="designproject">
      <div className="designproject__description">
        <div className="col1">
          <h3 className="title">Client</h3>
          <p className="details">nombre {props.name}</p>
          <h3 className="title">Project</h3>
          <p className="details">{props.type}</p>
        </div>
        <div className="col2">
          <h3 className="title">Details</h3>
          <p className="details">{props.name}</p>
        </div>
      </div>
      <div className="designproject__imageContainer">
        <img
          className="designproject__imageContainer__projectImage"
          src={props.image}
          alt="project figure"
        ></img>
      </div>
    </section>
  );
};

export default ProjectDetail;
