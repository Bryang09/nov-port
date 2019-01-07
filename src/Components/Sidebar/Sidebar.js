import React from "react";

import pic from "./mypic.jpg";

import "./Sidebar.scss";

import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <div
        className="img"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${pic}) center center / cover`
        }}
      />
      <div className="Menu">
        <ul>
          <Link to="/">
            <li
              onClick={props.onLanding}
              style={
                props.landing ? { background: "#192635", color: "#fff" } : null
              }
            >
              Home
            </li>
          </Link>

          <Link to="/about">
            <li
              onClick={props.onAbout}
              style={
                props.about ? { background: "#192635", color: "#fff" } : null
              }
            >
              About
            </li>
          </Link>
          <Link to="/projects">
            <li
              onClick={props.onProjects}
              style={
                props.projects ? { background: "#192635", color: "#fff" } : null
              }
            >
              Projects
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={props.onContact}
              style={
                props.contact ? { background: "#192635", color: "#fff" } : null
              }
            >
              Contact
            </li>
          </Link>
          <li>
            <a href="resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
