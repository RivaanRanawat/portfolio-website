import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 1100));
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const e = document.getElementById("loader");
      if (e) {
        //fade out
        e.classList.add("available");
        setTimeout(() => {
          //remove from DOM
          this.setState({ isLoading: false });
          e.outerHTML = "";
        }, 1000);
      }
    });
  }
  render() {
    return (
      <div className="app">
        <div id="loader">
          <div id="shadow"></div>
          <div id="box"></div>
        </div>
        {!this.state.isLoading ? (
          <div>
            <Nav />
            <Banner />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
