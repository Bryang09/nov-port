import React from "react";

import { Link } from "react-router-dom";

const Sass = props => {
  const list = props.list.filter(fil => fil.sass).map(res => {
    console.log(res);
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
              bg: "linear-gradient(45deg, #ff98fc, #f544f0)",
              color1: "#ff98fc",
              color2: "#f544f0"
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

export default Sass;
