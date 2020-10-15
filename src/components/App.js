import React, { useState, useEffect } from "react";
// import Comingsoon from "./Comingsoon";
import data from "../data/data.json";
import {  Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import ProjectsList from "./ProjectsList";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
// import DesignProject from "./DesignProject";
import ProjectDetail from "./ProjectDetail";
import "../stylesheets/App.scss";

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(data);
  }, []);

  const renderProjectDetail = () => {

    return (<ProjectDetail projects={projects} ></ProjectDetail>);


    // const routeProjectId = props.match.params.id;
   
    // const project = projects.find((project) => project.id === routeProjectId);

    // if (project) {
    //   return (<ProjectDetail></ProjectDetail>);
    // } else {
    //   return "proyecto no encontrado";
    // }
  };

  return (
    <div className="App" id="home">
      {/* <Comingsoon></Comingsoon> */}
      <Header></Header>
      <main className="main">
        <Home></Home>
        <Switch>
          <Route exact path="/project/:id" render={renderProjectDetail}></Route>
        </Switch>
        <ProjectsList projects={projects}></ProjectsList>

        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      {/* <DesignProject></DesignProject> */}
    </div>
  );
}

export default App;
