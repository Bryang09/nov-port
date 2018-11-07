import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Projects from "./Components/Home/Projects";
import Project from "./Components/Projects/Project/Project";
import Contact from "./Components/Home/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/projects/:id" component={Project} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
