import React from "react";

import "./Landing.scss";

const Landing = () => {
  return (
    <div className="Landing">
      <h1>Bryan Gonzalez</h1>
      <h2>Front End Developer</h2>
      <ul>
        <a
          href="https://github.com/Bryang09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-4x" />
        </a>
        <a
          href="www.linkedin.com/in/bryan-gonzalez09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-4x" />
        </a>
        <a href="mailto:bryan.gonzalez1020.bg@gmail.com">
          <i className="fas fa-envelope fa-4x" />
        </a>
      </ul>
    </div>
  );
};

export default Landing;
