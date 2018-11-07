import React, { Component } from "react";

import "./Home.scss";

import About from "../About/About";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../NavBar/Nav";

class About_ extends Component {
  state = {
    landing: false,
    about: true,
    projects: false,
    contact: false
  };

  onLanding = () => {
    this.setState({
      landing: true,
      about: false,
      projects: false,
      contact: false
    });
  };

  onAbout = () => {
    this.setState({
      landing: false,
      about: true,
      projects: false,
      contact: false
    });
  };

  onProjects = () => {
    this.setState({
      landing: false,
      about: false,
      projects: true,
      contact: false
    });
  };

  onContact = () => {
    this.setState({
      landing: false,
      about: false,
      projects: false,
      contact: true
    });
  };

  render() {
    return (
      <div className="Home">
        <>
          <Nav />
        </>
        <Sidebar onAbout={this.onAbout} about={this.state.about} />
        <About />
      </div>
    );
  }
}

export default About_;
