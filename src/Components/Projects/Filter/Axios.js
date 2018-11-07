import React from "react";

import { Link } from "react-router-dom";

const Axios = props => {
  const list = props.list.filter(fil => fil.axios).map(res => {
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
              bg: "linear-gradient(45deg, #f7dc24, #f5ab44)",
              color1: "#f7dc24",
              color2: "#f5ab44"
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

export default Axios;
