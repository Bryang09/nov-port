import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Hero">
        <h1>Contact Me</h1>
      </div>
      <h2>
        If you are interested in working together, please feel free to contact
        me.
      </h2>
      <div className="boxes">
        <a href="mailto:bryan.gonzalez1020.bg@gmail.com">
          <div className="box">
            <h2>Email</h2>
          </div>
        </a>
        <a
          href="https://github.com/Bryang09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="box">
            <h2>Github</h2>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/bryan-gonzalez09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="box">
            <h2>Linkedin</h2>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
