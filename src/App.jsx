import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header"
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Testimonail from "./components/testimonail/Testimonail";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonail/>
    </div>
  );
};

export default App;
