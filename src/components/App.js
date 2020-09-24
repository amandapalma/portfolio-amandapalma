import React from "react";
// import Comingsoon from "./Comingsoon";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      {/* <Comingsoon></Comingsoon> */}
      <section className="home">
        <div className="home__homeBackground"></div>
        <header className="home__header">
          <div className="closeIcon">
            <i className="fas fa-times"></i>
          </div>
          <nav className="header__menu">
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
        <div className="home__titlebox">
          <h1 className="home__title">
            <span className="home__title1">ho</span>
            <span className="home__title2">
              la
              <div className="palmtree"></div>
            </span>
          </h1>
        </div>
      </section>
      <section className="projects">
        <h2 className="projects__sectionTitle">projects</h2>
        <div className="projects__titleIcon">
          <span role="img" aria-labelledby="palmtree icon">
            🌴
          </span>
        </div>
        <ul>
          <li className="project">
            <div className="project__cover"></div>
            <div className="project__image"></div>
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
        </ul>
        <span className="upArrow">
          <i className="fas fa-long-arrow-alt-up"></i>up >>
        </span>
      </section>
      <section className="about">
        <div className="aboutBackround"></div>
        <h2 className="about__sectionTitle">about</h2>
        <div className="about__titleIcon">
          <span role="img" aria-labelledby="palmtree icon">
            🌴
          </span>
        </div>
        <p>
          Aliquip nulla eiusmod velit incididunt commodo cillum aliqua ullamco
          officia ex consequat anim. Anim sit anim eu proident anim labore dolor
          ea reprehenderit voluptate. <br></br>Tempor minim laboris veniam
          mollit sint consectetur. Dolor duis amet sunt ut laboris velit labore
          dolore aliqua velit aliquip voluptate eiusmod voluptate. Voluptate
          eiusmod officia fugiat adipisicing enim exercitation consectetur eu
          commodo nulla elit. Lorem excepteur in tempor nisi esse cupidatat.{" "}
          <br></br>Non labore culpa eiusmod ullamco ex voluptate labore deserunt
          ipsum irure nulla sunt commodo ad. Tempor occaecat amet nostrud sit
          voluptate ut aute fugiat velit eiusmod cillum laborum. Cillum commodo
          occaecat tempor quis culpa.
        </p>
        <div className="profileImg">
          <img alt="profile"></img>
        </div>

        <span className="upArrow">
          <i className="fas fa-long-arrow-alt-up"></i>up >>
        </span>
      </section>
      <section className="contact">
        <h2 className="contact__sectionTitle">contact</h2>
        <div className="stampframe1">
          <div className="stampframe2">
            <img alt="palmtreeIcon"></img>
          </div>
        </div>
        <div className="contact__titleIcon">
          <span role="img" aria-labelledby="palmtree icon">
            🌴
          </span>
        </div>
        <form>
          <label htmlFor="GET-name">Name</label>
          <input id="GET-name" type="text" name="name"></input>
          <label htmlFor="GET-email">Email</label>
          <input id="GET-email" type="email" name="email"></input>
          <textarea name="textarea" rows="10" cols="50"></textarea>
          <input type="submit" value="submit"></input>
        </form>
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
        <span className="upArrow">
          <i className="fas fa-long-arrow-alt-up"></i>up >>
        </span>
      </section>
    </div>
  );
}

export default App;
