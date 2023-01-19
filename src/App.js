import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Preloader from "./Pre";
import Footer from "./Components/Footer";
import ScrollToTop from "./ScrollToTop";
//PAGES
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
//STYLE
import "./App.css";

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </div>
    </>
   
  );
}

export default App;
