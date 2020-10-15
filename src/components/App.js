import React,{useState, useEffect} from "react";
// import Comingsoon from "./Comingsoon";
import data from "../data/data.json";
import {link, Route, Switch} from 'react-router-dom';

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
 
  
  useEffect(()=>{setProjects(data);}, [])

  return (

   

    <div className="App" id="home">
      {/* <Comingsoon></Comingsoon> */}
      <Header></Header>
      <main className="main">
        <Home></Home>
        <Switch><ProjectDetail></ProjectDetail></Switch> 
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
