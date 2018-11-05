import React from "react";

import pic from "./mypic.jpg";

import "./Sidebar.scss";

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <div
        className="img"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${pic}) center center / cover`,
          borderRadius: "50%"
        }}
      />
      <div className="Menu">
        <ul>
          <li
            onClick={props.onLanding}
            style={
              props.landing ? { background: "#3f99e0", color: "#fff" } : null
            }
          >
            Home
          </li>
          <li
            onClick={props.onAbout}
            style={
              props.about ? { background: "#3f99e0", color: "#fff" } : null
            }
          >
            About Me
          </li>
          <li
            onClick={props.onProjects}
            style={
              props.projects ? { background: "#3f99e0", color: "#fff" } : null
            }
          >
            Projects
          </li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
