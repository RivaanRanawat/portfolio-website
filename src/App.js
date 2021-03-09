import React from "react";
import "./App.css";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/latest" component={Blog} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
