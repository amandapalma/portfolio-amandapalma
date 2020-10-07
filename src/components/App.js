import React from "react";
// import Comingsoon from "./Comingsoon";
import palmtree from "../images/palmtreeicon.png";
import palmtreeIsland from "../images/palmtree-island.png";
import uparrow from "../images/up-arrow.svg";
// import profilepic from "../images/amanda-bn.png";
import Header from "./Header";
import Footer from "./Footer";

import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      {/* <Comingsoon></Comingsoon> */}
      <Header></Header>
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
            <li className="project">
              <div className="project__cover">
                <div className="project__buttons">
                  <button className="projectButton codeButton">
                    <i className="fas fa-code"></i>
                  </button>
                  <button className="projectButton webButton">
                    <i className="fas fa-globe"></i>
                  </button>
                </div>
                <div className="project__description">
                  <h4 className="proyectType">corporative website</h4>
                  <h3 className="proyectName"> A-Team project</h3>
                  <div className="techIcons">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-sass"></i>
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
              <div className="project__cover">
                <div className="project__buttons">
                  <button className="projectButton codeButton">
                    <i className="fas fa-code"></i>
                  </button>
                  <button className="projectButton webButton">
                    <i className="fas fa-globe"></i>
                  </button>
                </div>
                <div className="project__description">
                  <h4 className="proyectType">corporative website</h4>
                  <h3 className="proyectName"> A-Team project</h3>
                  <div className="techIcons">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-sass"></i>
                  </div>
                </div>
              </div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
            </li>
            <li className="project">
              <div className="project__cover">
                <div className="project__buttons">
                  <button className="projectButton codeButton">
                    <i className="fas fa-code"></i>
                  </button>
                  <button className="projectButton webButton">
                    <i className="fas fa-globe"></i>
                  </button>
                </div>
                <div className="project__description">
                  <h4 className="proyectType">corporative website</h4>
                  <h3 className="proyectName"> A-Team project</h3>
                  <div className="techIcons">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-sass"></i>
                  </div>
                </div>
              </div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
            </li>
            <li className="project">
              <div className="project__cover">
                <div className="project__buttons">
                  <button className="projectButton codeButton">
                    <i className="fas fa-code"></i>
                  </button>
                  <button className="projectButton webButton">
                    <i className="fas fa-globe"></i>
                  </button>
                </div>
                <div className="project__description">
                  <h4 className="proyectType">corporative website</h4>
                  <h3 className="proyectName"> A-Team project</h3>
                  <div className="techIcons">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-sass"></i>
                  </div>
                </div>
              </div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
            </li>
            <li className="project">
              <div className="project__cover">
                <div className="project__buttons">
                  <button className="projectButton codeButton">
                    <i className="fas fa-code"></i>
                  </button>
                  <button className="projectButton webButton">
                    <i className="fas fa-globe"></i>
                  </button>
                </div>
                <div className="project__description">
                  <h4 className="proyectType">corporative website</h4>
                  <h3 className="proyectName"> A-Team project</h3>
                  <div className="techIcons">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-sass"></i>
                  </div>
                </div>
              </div>
              <img
                className="project__image"
                alt="project"
                src="https://via.placeholder.com/400"
              ></img>
            </li>
            <li className="project">
              <div className="project__cover">
                <div className="project__buttons">
                  <button className="projectButton codeButton">
                    <i className="fas fa-code"></i>
                  </button>
                  <button className="projectButton webButton">
                    <i className="fas fa-globe"></i>
                  </button>
                </div>
                <div className="project__description">
                  <h4 className="proyectType">corporative website</h4>
                  <h3 className="proyectName"> A-Team project</h3>
                  <div className="techIcons">
                    <i className="fab fa-js"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-sass"></i>
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
        {/* <section className="section about">
          <div className="titleBox">
            <h2 id="about">about</h2>
            <img
              className="palmtree sectionPalmtree"
              alt="palmtree"
              src={palmtree}
            ></img>
          </div>
          <div className="about__aboutBackround"></div>
          <div className="profile">
            <p className="profile__description">
              Vengo del <strong>diseño</strong>, la{" "}
              <strong>gestión cultural</strong>, del sector
              <strong> audiovisual</strong>, y soy <strong>música</strong>.
              Ahora comienzo una nueva y emocionante etapa como{" "}
              <strong>desarrolladora front end. </strong>Cansada de la
              inestabilidad laboral y en busca de un entorno creativo que me
              permitiera crecer profesionalmente me topé con la programación y
              estoy muy contenta de haberlo hecho. <br></br>
              <br></br>Creo en la cultura y en la tecnología como motores para
              favorecer el entendimiento y la{" "}
              <strong>solución de problemas</strong> entre las personas y su
              entorno, desde el respeto, la empatía y el esfuerzo por mejorar. E
              intento aplicar esto a todo lo que hago, no sólo profesionalmente.{" "}
              <br></br>
              <br></br>
              Me encantan las plantas, y todo ser viviente. Disfruto mucho
              aprendendiendo y creo que no podría vivir (bien) sin humor.
              Actualmente hago música y busco activamente empleo como front.
              Sugerencias, colaboraciones, y por supuesto a ofertas laborales
              son bienvenidas.
              <strong> Contacta conmigo</strong> si quieres que nos conozcamos.
              Será un placer. ;)
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
        </section> */}
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
                Dear Amanda: <span ClassName="as">*</span>
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
                Name <span ClassName="label__asterisk">*</span>
              </label>
              <input
                className="formInput nameInput"
                id="GET-name"
                type="text"
                name="name"
              ></input>
              <label className="label emailLabel" htmlFor="GET-email">
                Email <span ClassName="label__asterisk">*</span>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
