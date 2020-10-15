import React from "react";
import "../stylesheets/projectdetail.scss";
import lemur1 from "../images/lemur-1.jpg";


const ProjectDetail = (props)=>{return (
<section className="designproject">
      <div className="designproject__description">
        <div className="col1">
          <h3 className="title">Client</h3>
          <p className="details">CKF Painting Branding</p>
          <h3 className="title">Project</h3>
          <p className="details">Branding, Type Design & Web Design</p>
        </div>
        <div className="col2">
          <h3 className="title">Details</h3>
          <p className="details">
            CKF Painting is a professional painting company out of Sarasota
            Florida. We developed a custom typeface and hard-working brand
            system inspired by shapes found within the practice, that pays
            homage to the process. These brand elements provide a fresh modular
            feel, while the logotype remains bold and industrial.
          </p>
        </div>
      </div>
      <div className="designproject__imageContainer">
        <img
          className="designproject__imageContainer__projectImage"
          src={lemur1}
          alt="project figure"
        ></img>
      </div>
    </section>

)};

export default ProjectDetail;