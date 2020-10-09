import React from "react";
// import Comingsoon from "./Comingsoon";

import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
// import DesignProject from "./DesignProject";

import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App" id="home">
      {/* <Comingsoon></Comingsoon> */}
      <Header></Header>
      <main className="main">
        <Home></Home>
        <Projects></Projects>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      {/* <DesignProject></DesignProject> */}
    </div>
  );
}

export default App;
