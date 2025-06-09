import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header"
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
    </div>
  );
};

export default App;
