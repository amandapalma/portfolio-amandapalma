import React from "react";
import "../stylesheets/contact.scss";
import palmtreeIsland from "../images/palmtree-island.png";
import uparrow from "../images/up-arrow.svg";
import palmtree from "../images/palmtreeicon.png";

const Contact = () => {
  return (
    <section className="section contact">
      <div className="titleBox">
        <h2 id="contact">contact</h2>
        <img
          className="palmtree sectionPalmtree"
          alt="palmtree"
          src={palmtree}
        ></img>
      </div>
      <form className="postcard">
        <div className="leftColumn">
          <label className="label textLabel" htmlFor="GET-text">
            Dear Amanda: <span className="as">*</span>
          </label>
          <textarea
            className="formInput textarea"
            name="textarea"
            rows="10"
          ></textarea>
          <button type="submit" className="submitMobile">
            send it! &nbsp;&nbsp;<i className="fas fa-paper-plane"></i>
          </button>
        </div>
        <div className="rightColumn">
          <div className="stamp">
            <div className="stamp2">
              <img
                className="palmtreeIsland"
                alt="palmtree"
                src={palmtreeIsland}
              ></img>
            </div>
          </div>
          <label className="label nameLabel" htmlFor="GET-name">
            Name <span className="label__asterisk">*</span>
          </label>
          <input
            className="formInput nameInput"
            id="GET-name"
            type="text"
            name="name"
          ></input>
          <label className="label emailLabel" htmlFor="GET-email">
            Email <span className="label__asterisk">*</span>
          </label>
          <input
            className="formInput emailInput"
            id="GET-email"
            type="email"
            name="email"
          ></input>
          <button type="submit" className="submitTablet">
            send it! &nbsp;&nbsp;<i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
      <div className="arrowBox contactArrow">
        <a href="#home" className="upArrow">
          <img className="upArrow__arrow" alt="up arrow" src={uparrow}></img>
          <p className="upArrow__upText">up</p>
        </a>
      </div>
    </section>
  );
};


export default Contact;