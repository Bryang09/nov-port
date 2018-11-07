import React from "react";

import "./Tech.scss";

const Tech = props => {
  console.log(props.list);
  const tech = props.list;
  return (
    <div className="Tech">
      {tech.react ? <h3 className="react">React</h3> : null}
      {tech.reactrouter ? <h3 className="react">React Router</h3> : null}
      {tech.mern ? <h3 className="react">MERN</h3> : null}
      {tech.angular ? <h3 className="angular">Angular</h3> : null}
      {tech.sass ? <h3 className="sass">Sass</h3> : null}
      {tech.axios ? <h3 className="axios">Axios</h3> : null}
    </div>
  );
};

export default Tech;
