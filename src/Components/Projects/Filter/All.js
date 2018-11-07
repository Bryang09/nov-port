import React from "react";

import { Link } from "react-router-dom";

const All = props => {
  const all = props.list.map(res => {
    return (
      <div className="pr" key={res.id}>
        <Link
          to={{
            pathname: `/projects/${res.id}`,
            state: {
              src: `${res.src}`,
              title: `${res.title}`,
              code: `${res.code}`,
              demo: `${res.desc}`,
              angular: `${res.angular}`,
              axios: `${res.axios}`,
              mern: `${res.mern}`,
              react: `${res.react}`,
              reactrouter: `${res.reactrouter}`,
              sass: `${res.sass}`
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

  return all;
};

export default All;
