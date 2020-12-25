import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
          <div>
            <Nav />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
      </div>
    );
  }
}
