import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header"
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Testimonail from "./components/testimonail/Testimonail";
import Contact from "./components/contact/Contact";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonail/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
