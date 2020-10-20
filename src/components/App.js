import React, { useState, useEffect } from "react";
// import Comingsoon from "./Comingsoon";
import data from "../data/data.json";
import { Route, Switch } from "react-router-dom";

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


  const renderProjectDetail = (props) => {
    const clickedId = props.match.params.id;

    const foundedProject = projects.find((project) => {
      return project.id === parseInt(clickedId);
    });
    // console.log(foundedProject);

    if (foundedProject) {
      return <ProjectDetail project={foundedProject} />;
    } else {
      return "project not found";
    }
  };

  return (
    <div className="App" id="home">
      {/* <Comingsoon></Comingsoon> */}
      <Header></Header>
      <main className="main">
        <Home></Home>
        <Switch>
          <Route exact path="/projects">
            <ProjectsList projects={projects}></ProjectsList>
          </Route>
          <Route exact path="/project/:id" render={renderProjectDetail}></Route>
        </Switch>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      {/* <DesignProject></DesignProject> */}
    </div>
  );
}

export default App;
