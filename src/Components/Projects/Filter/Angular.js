import React from "react";

import { Link } from "react-router-dom";

const angular = props => {
  const list = props.list.filter(fil => fil.angular).map(res => {
    return (
      <div className="pr" key={res.id}>
        <Link
          to={{
            pathname: `/projects/${res.id}`,
            state: {
              src: `${res.src}`,
              title: `${res.title}`,
              desc: `${res.desc}`,
              code: `${res.code}`,
              demo: `${res.demo}`,
              angular: res.angular,
              axios: res.axios,
              mern: res.mern,
              react: res.react,
              reactrouter: res.reactrouter,
              sass: res.sass,
              bg: "linear-gradient(45deg, #ff3333, #7f0e0e)",
              color1: "#ff3333",
              color2: "#7f0e0e"
            }
          }}
        >
          <div
            className="Project"
            style={{
              backgroundImage: `url(${res.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat"
            }}
          />
        </Link>
      </div>
    );
  });

  return list;
};

export default angular;
