import React from "react";
// import Comingsoon from "./Comingsoon";
import palmtree from "../images/palmtreeicon.png";
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
            <li className="nav__option">projects</li>
            <li className="nav__option">about</li>
            <li className="nav__option">contact</li>
            <li className="nav__option">resume</li>
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
        <section className="home">
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
            <h2>projects</h2>
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
                  <button className="projectButton codeButton"><i class="fas fa-code"></i></button>
                  <button className="projectButton webButton"><i class="fas fa-globe"></i></button>
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
          <span className="upArrow">
            <i className="fas fa-long-arrow-alt-up"></i>up >>
          </span>
        </section>
        <section className="about">
          <div className="about__aboutBackround"></div>
          <div className="titleBox">
            <h2>about</h2>
            <img
              className="palmtree sectionPalmtree"
              alt="palmtree"
              src={palmtree}
            ></img>
          </div>
          <p className="about__description">
            Aliquip nulla eiusmod velit incididunt commodo cillum aliqua ullamco
            officia ex consequat anim. Anim sit anim eu proident anim labore
            dolor ea reprehenderit voluptate. <br></br>Tempor minim laboris
            veniam mollit sint consectetur. Dolor duis amet sunt ut laboris
            velit labore dolore aliqua velit aliquip voluptate eiusmod
            voluptate. Voluptate eiusmod officia fugiat adipisicing enim
            exercitation consectetur eu commodo nulla elit. Lorem excepteur in
            tempor nisi esse cupidatat. <br></br>Non labore culpa eiusmod
            ullamco ex voluptate labore deserunt ipsum irure nulla sunt commodo
            ad. Tempor occaecat amet nostrud sit voluptate ut aute fugiat velit
            eiusmod cillum laborum. Cillum commodo occaecat tempor quis culpa.
          </p>
          <div className="about__profileImg">
            <img alt="profile"></img>
          </div>
          <span className="upArrow">
            <i className="fas fa-long-arrow-alt-up"></i>up >>
          </span>
        </section>
        <section className="contact">
          <div className="titleBox">
            <h2>contact</h2>
            <img
              className="palmtree sectionPalmtree"
              alt="palmtree"
              src={palmtree}
            ></img>
          </div>
          <div className="stampframe1">
            <div className="palmtreeStampBox">
              <img className="palmtree" alt="palmtree" src={palmtree}></img>
            </div>
          </div>
          <form>
            <label htmlFor="GET-name">Name</label>
            <input id="GET-name" type="text" name="name"></input>
            <label htmlFor="GET-email">Email</label>
            <input id="GET-email" type="email" name="email"></input>
            <textarea name="textarea" rows="10" cols="50"></textarea>
            <input type="submit" value="submit"></input>
          </form>
          <span className="upArrow">
            <i className="fas fa-long-arrow-alt-up"></i>up >>
          </span>
        </section>
      </main>
      <footer>
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
      </footer>
    </div>
  );
}

export default App;
