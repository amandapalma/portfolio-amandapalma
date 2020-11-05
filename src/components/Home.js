import React from "react";
import "../stylesheets/home.scss";
import palmtree from "../images/palmtreeicon.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home__homeBackground"></div>
      <h1 className="home__mainTitle ">
        <span className="mainText1">ho</span>
        <span className="mainText2">
          la<img className="palmtree" alt="palmtree" src={palmtree}></img>
        </span>
      </h1>
    </section>
  );
};
export default Home;
