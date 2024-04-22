import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./container/Header/Header";
import "./App.scss";
import About from "./container/About/About";
import Work from "./container/Work/Work";
import Skills from "./container/Skills/Skills";
import Footer from "./container/Footer/Footer";
import Testimonial from "./container/Testimonial/Testimonial";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
};

export default App;
