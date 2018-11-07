import React from "react";

const Menu = props => {
  console.log(props);
  return (
    <div className="Categories">
      <h5
        onClick={props.onReact}
        className={props.react ? "Fill react" : "react"}
        style={props.react ? { color: "#fff" } : null}
      >
        React
      </h5>
      <h5
        onClick={props.onRouter}
        className={props.reactr ? "Fill react" : "react"}
        style={props.reactr ? { color: "#fff" } : null}
      >
        React-Router
      </h5>
      <h5
        onClick={props.onMern}
        className={props.mern ? "Fill react" : "react"}
        style={props.mern ? { color: "#fff" } : null}
      >
        MERN
      </h5>

      <h5
        onClick={props.onAngular}
        className={props.angular ? "NgFill angular" : "angular"}
        style={props.angular ? { color: "#fff" } : null}
      >
        Angular
      </h5>
      <h5
        onClick={props.onAxios}
        className={props.axios ? "AxiosFill axios" : "axios"}
        style={props.axios ? { color: "#fff" } : null}
      >
        Axios
      </h5>

      <h5
        onClick={props.onSass}
        className={props.sass ? "SassFill sass" : "sass"}
        style={props.sass ? { color: "#fff" } : null}
      >
        Sass
      </h5>
    </div>
  );
};

export default Menu;
