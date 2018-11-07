import React from "react";

import "./Project.scss";

import Tech from "./Tech/Tech";
import Nav from "./ProjectNav/Nav";

const Project = props => {
  console.log(props);

  const short = props.location.state;

  console.log(short);
  return (
    <div className="Project" style={{ background: `${short.bg}` }}>
      <>
        <Nav />
      </>
      <div
        className="img"
        style={{
          backgroundImage: `url(${short.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat"
        }}
      />
      <div className="projectText">
        <Tech list={short} />
        <h1>{short.title}</h1>
        <h4>{short.desc}</h4>
        <div className="options">
          <a href={`${short.demo}`} target="_blank" rel="noopener noreferrer">
            <h5 style={{ background: `${short.color1}`, color: "#fff" }}>
              Demo
            </h5>{" "}
          </a>

          <a href={`${short.code}`} target="_blank" rel="noopener noreferrer">
            <h5 style={{ background: `${short.color2}`, color: "#fff" }}>
              Code
            </h5>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
