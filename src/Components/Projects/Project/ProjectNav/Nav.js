import React, { Component } from "react";

import "./Nav.scss";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {
    display: false,
    menu: false,
    first: false,
    second: false,
    third: false
  };

  onSlide = () => {
    this.setState({
      display: !this.state.display,
      menu: !this.state.menu,
      first: !this.state.first,
      second: !this.state.second,
      third: !this.state.third
    });
  };

  render() {
    return (
      <div className={"MainNav " + (this.state.menu ? "Menu-Slide " : "")}>
        <div className="NavBar">
          <h4>
            <NavLink exact to="/" style={{ fontWeight: "300" }}>
              Bryan Gonzalez
            </NavLink>
          </h4>
          <div className="Navigation">
            <ul>
              <li>
                <NavLink exact activeStyle={{ color: "#44a6f5" }} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeStyle={{ color: "#44a6f5" }}
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>{" "}
              <li>
                <NavLink exact activeStyle={{ color: "#44a6f5" }} to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={"NavBtn " + (this.state.display ? "Display-Menu " : "")}
          onClick={this.onSlide}
        >
          <div className={"btn " + (this.state.first ? "Line1 " : "")} />
          <div className={"btn " + (this.state.second ? " Line2 " : "")} />
          <div className={"btn " + (this.state.third ? " Line3 " : "")} />
        </div>
      </div>
    );
  }
}

export default NavBar;
