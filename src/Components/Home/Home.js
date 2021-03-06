import React, { Component } from "react";

import "./Home.scss";

import Sidebar from "../Sidebar/Sidebar";
import Landing from "./Landing/Landing";
import Nav from "../NavBar/Nav";

class Home extends Component {
  state = {
    landing: true,
    about: false,
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
        <Sidebar
          onLanding={this.onLanding}
          landing={this.state.landing}
          onAbout={this.onAbout}
          about={this.state.about}
          onProjects={this.onProjects}
          projects={this.state.projects}
          onContact={this.onContact}
          contact={this.state.contact}
        />
        <Landing />
      </div>
    );
  }
}

export default Home;
