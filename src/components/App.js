import React from "react";
// import Comingsoon from "./Comingsoon";
import palmtree from "../images/palmtreeicon.png";
import uparrow from "../images/up-arrow.svg";
import profilepic from "../images/amanda-bn.png";

import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      {/* <Comingsoon></Comingsoon> */}
      <header className="fixHeader">
        <div className="fixHeader__closeIcon">
          <i className="fas fa-times"></i>
        </div>
        <nav className="fixHeader__menu">
          <ul className="nav">
            <li className="nav__option">
              <a href="#projects" alt="go to projects">
                projects
              </a>
            </li>
            <li className="nav__option">
              <a href="#about" alt="go to projects">
                about
              </a>
            </li>
            <li className="nav__option">
              <a href="#contact" alt="go to projects">
                contact
              </a>
            </li>
            <li className="nav__option">
              <a href="#resume" alt="go to projects">
                resume
              </a>
            </li>
          </ul>
          <ul className="ssmm">
            <li className="ssmm__icon">
              <i className="fab fa-github"></i>
            </li>
            <li className="ssmm__icon">
              <i className="fab fa-linkedin-in"></i>
            </li>
            <li className="ssmm__icon">
              <i className="fas fa-mobile-alt"></i>
            </li>
            <li className="ssmm__icon">
              <i className="fas fa-envelope"></i>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section id="home" className="home">
          <div className="home__homeBackground"></div>
          <h1 className="home__mainTitle">
            <span>ho</span>
            <span>
              la<img className="palmtree" alt="palmtree" src={palmtree}></img>
            </span>
          </h1>
        </section>
        <section className="projects">
          <div className="titleBox">
            <h2 id="projects">projects</h2>
            <img
              className="palmtree sectionPalmtree"
              alt="palmtree"
              src={palmtree}
            ></img>
          </div>
          <ul className="workslist">
            <li className="project">
              <div className="project__cover">
                <div className="project__buttons">
                  <button className="projectButton codeButton">
                    <i class="fas fa-code"></i>
                  </button>
                  <button className="projectButton webButton">
                    <i class="fas fa-globe"></i>
                  </button>
                </div>
                <div className="project__description">
                  <h4 className="proyectType">corporative website</h4>
                  <h3 className="proyectName"> A-Team project</h3>
                  <div className="techIcons">
                    <i class="fab fa-js"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-sass"></i>
                  </div>
                </div>
              </div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
            </li>
            {/* TO DELETE */}
            <li className="project">
              <div className="project__cover"></div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
              <div className="project__buttons">
                <button className="codeButton"></button>
                <button className="webButton"></button>
              </div>
              <div className="project__description">
                <h4 className="proyectType">corporative website</h4>
                <h3 className="proyectName"> A-Team</h3>
                <div className="techIcons"></div>
              </div>
            </li>
            <li className="project">
              <div className="project__cover"></div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
              <div className="project__buttons">
                <button className="codeButton"></button>
                <button className="webButton"></button>
              </div>
              <div className="project__description">
                <h4 className="proyectType">corporative website</h4>
                <h3 className="proyectName"> A-Team</h3>
                <div className="techIcons"></div>
              </div>
            </li>
            <li className="project">
              <div className="project__cover"></div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
              <div className="project__buttons">
                <button className="codeButton"></button>
                <button className="webButton"></button>
              </div>
              <div className="project__description">
                <h4 className="proyectType">corporative website</h4>
                <h3 className="proyectName"> A-Team</h3>
                <div className="techIcons"></div>
              </div>
            </li>
            <li className="project">
              <div className="project__cover"></div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
              <div className="project__buttons">
                <button className="codeButton"></button>
                <button className="webButton"></button>
              </div>
              <div className="project__description">
                <h4 className="proyectType">corporative website</h4>
                <h3 className="proyectName"> A-Team</h3>
                <div className="techIcons"></div>
              </div>
            </li>
            {/* TO DELETE */}
          </ul>
          <div className="arrowBox">
            <a href="#home" className="upArrow">
              <img
                className="upArrow__arrow"
                alt="up arrow"
                src={uparrow}
              ></img>
              <p className="upArrow__upText">up</p>
            </a>
          </div>
        </section>
        <section className="about">
          <div className="about__aboutBackround"></div>

          <div className="titleBox">
            <h2 id="about">about</h2>
            <img
              className="palmtree sectionPalmtree"
              alt="palmtree"
              src={palmtree}
            ></img>
          </div>

          <div className="profile">
            <p className="profile__description">
              Programadora Front end. Vengo del diseño, la gestión cultural, del
              audiovisual, y soy música. Creo en la cultura y en la tecnología
              como motores para favorecer el entendimiento y la solución de
              problemas entre las personas y su entorno, desde el respeto, la
              empatía y el esfuerzo por mejorar. Y trato de aplicar esto a todo
              lo que hago, no sólo a nivel profesional. Me interesan también las
              áreas sociales y medioambientales. Se me da bien el diseño, la
              comunicación y el trabajo en equipo, tengo experiencia trabajando
              en remoto y creo que no podría vivir (bien) sin humor. Diría que
              soy creativa, polivalente, me adapto y me encanta aprender. Y si
              las cosas están bien organizadas y claras para todos, mejor.
            </p>

            <div className="profile__imageBox">
              <img className="profileImg" src={profilepic} alt="profile"></img>
            </div>
          </div>

          <div className="arrowBox">
            <a href="#home" className="upArrow">
              <img
                className="upArrow__arrow"
                alt="up arrow"
                src={uparrow}
              ></img>
              <p className="upArrow__upText">up</p>
            </a>
          </div>
        </section>
        <section className="contact">
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
                Dear Amanda: *
              </label>
              <textarea
                className="formInput textarea"
                name="textarea"
                rows="10"
              ></textarea>
            </div>
            <div className="rightColumn">
              <div className="stamp">
                <div className="stamp2">
                  <img className="palmtree" alt="palmtree" src={palmtree}></img>
                </div>
              </div>
              <label className="label nameLabel" htmlFor="GET-name">
                Name *
              </label>
              <input
                className="formInput nameInput"
                id="GET-name"
                type="text"
                name="name"
              ></input>
              <label className="label emailLabel" htmlFor="GET-email">
                Email *
              </label>
              <input
                className="formInput emailInput"
                id="GET-email"
                type="email"
                name="email"
              ></input>
              <button type="submit" className="submitInput">
                send it! &nbsp;&nbsp;<i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
          <div className="arrowBox">
            <a href="#home" className="upArrow">
              <img
                className="upArrow__arrow"
                alt="up arrow"
                src={uparrow}
              ></img>
              <p className="upArrow__upText">up</p>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span className="copy">
          <h4>Find me:</h4>
        </span>
        <ul className="footerssmm">
          <li className="ssmm__icon">
            <a
              ClassName="footerGH"
              href="https://github.com/amandapalma"
              alt="github"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="ssmm__icon">
            <a
              ClassName="footerLin"
              href="https://www.linkedin.com/in/amanda~palma/"
              alt="linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="ssmm__icon">
            <a
              ClassName="footerTel"
              href="callto:0034687508122"
              alt="telephone"
            >
              <i className="fas fa-mobile-alt"></i>
            </a>
          </li>
          <li className="ssmm__icon">
            <a
              ClassName="footerMail"
              href="mailto:amandapalma00@gmail.com"
              alt="email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
        <span className="copy">
          <small>amandapalma ©</small>
        </span>
        <span className="copy">
          <small>(+34) 687 508 122</small>
        </span>
        <span className="copy">
          <small>amandapalma00@gmail.com</small>
        </span>
      </footer>
    </div>
  );
}

export default App;
