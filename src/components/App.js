import React,{useState, useEffect} from "react";
// import Comingsoon from "./Comingsoon";
import data from "../data/data.json";

import Header from "./Header";
import Home from "./Home";
import ProjectsList from "./ProjectsList";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
// import DesignProject from "./DesignProject";
import "../stylesheets/App.scss";


// console.log(data);


function App() {

  const [projects, setProjects] = useState([]);
  // console.log(projects);
  
  useEffect(()=>{setProjects(data);}, [])

  return (

    // console.log(projects),

    <div className="App" id="home">
      {/* <Comingsoon></Comingsoon> */}
      <Header></Header>
      <main className="main">
        <Home></Home>
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
