import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/about/About";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar/>
      <Header/>
      <About/>
    </div>
  );
};

export default App;
