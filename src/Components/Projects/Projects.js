import React, { Component } from "react";

import "./Projects.scss";

import Rea from "./Filter/React";
import Router from "./Filter/Router";
import Sass from "./Filter/Sass";
import Axios from "./Filter/Axios";
import Mern from "./Filter/Mern";
import Angular from "./Filter/Angular";

import Menu from "./Menu";

class Projects extends Component {
  state = {
    projects: [
      // prettier-ignore
      {  id: 6, src: "watches.jpg", title: "Watches App", desc: "An online store that specializes in Watches.", react: true, reactrouter: true, axios: true,  sass: false, mern: true, angular: false, code: "https://github.com/Bryang09/watches", demo: "https://intense-bayou-29884.herokuapp.com/#/" },
      // prettier-ignore
      { id: 5, src: "newshelter.jpg", title: "The Shelter App", desc: "An application that makes use of the PetFinder api, this app will search for any shelter/pet near you.", react: true, reactrouter: true, axios: true,  sass: true, mern:false, angular: false, code: "https://github.com/Bryang09/newshelter", demo: "https://bryang09.github.io/newshelter/#/" },
      // prettier-ignore
      { id: 3, src: "newmovies.jpg", title: "The Movies App", desc: "An application that makes use of the MovieDB api, this app gives a description for any movie, or show.", react: true, reactrouter: true, axios: true,  sass: true, mern:false, angular: false, code: "https://github.com/Bryang09/newmovies",  demo: "https://bryang09.github.io/newmovies/#/" },
      // prettier-ignore
      { id: 9, src: "traveling.jpg", title: 'Traveling App', desc: 'Design for a traveling agency', react: true, reactrouter: true, axios: false,  sass: true, mern:false, angular: false, code: "https://github.com/Bryang09/traveling", demo: "https://bryang09.github.io/traveling/#/" },
      // prettier-ignore
      {  id: 11, src: "anime.jpg", title: "AnimeFinder App", desc: "An application for finding Anime", react: true, reactrouter: true, axios: true,  sass: true, mern:false, angular: false, code: "https://github.com/Bryang09/anime", demo: "https://bryang09.github.io/anime/#/" },
      // prettier-ignore
      {  id: 0, src: "trainer.png", title: "Trainer App", desc: "A responsive landing page for a personal trainer", react: true, reactrouter: false, axios: false,  sass: true, mern:false, angular: false, code: "https://github.com/Bryang09/trainer", demo: "https://bryang09.github.io/trainer/#/" },
      // prettier-ignore
      { id: 1, src: "restaurant.jpg", title: "Restaurant App", desc: "A restaurant application for a fictional restaurant", react: true, reactrouter: true, axios: false,  sass: false, mern:false, angular: false, code: "https://github.com/Bryang09/restaurant", demo: "https://bryang09.github.io/restaurant/#/" },
      // prettier-ignore
      { id: 2, src: "glasses.png", title: "The Glasses App", desc: "A responsive landing page for an online glasses retailer", react: true, reactrouter: false, axios: false,  sass: false, mern:false, angular: false, code: "https://github.com/Bryang09/glasses", demo: "https://bryang09.github.io/glasses/#/" },
      // prettier-ignore
      { id: 10, src: "ng-restaurant.jpg", title: "Angular Restaurant App", desc: "A responsive restaurant website", react: false, reactrouter: false, axios: false,  sass: true, angular: true, code: "https://github.com/Bryang09/ng-restaurant",  demo: "https://bryang09.github.io/ng-restaurant" },
      // prettier-ignore
      { id: 7, src: "glasses.png", title: "The Glasses App", desc: "A responsive landing page for an online glasses retailer", react: false, reactrouter: false, axios: false,  sass: true, angular: true, code: "https://github.com/Bryang09/ng-glasses",  demo: "https://bryang09.github.io/ng-glasses" },
      // prettier-ignore
      { id: 4, src: "recipes.png",  title: "The Recipes App", desc: "An application that makes use of the Food2Fork api, this app will search for any recipe.", react: true, reactrouter: true, axios: true,  sass: false, mern:false, angular: false, code: "https://github.com/Bryang09/recipe", demo: "https://bryang09.github.io/recipe/#/" },

      // prettier-ignore
      { id: 8, src: "trainer.png", title: "The Trainer App", desc: "A responsive landing page for a personal trainer", react: false, reactrouter: false, axios: false,  sass: true, mern:false, angular: true, code: "https://github.com/Bryang09/ng-trainer", demo: "https://bryang09.github.io/ng-trainer" }
    ],
    react: true,
    reactr: false,
    axios: false,
    flexbox: false,
    sass: false,
    mern: false,
    angular: false
  };

  onReact = () => {
    // prettier-ignore
    this.setState({ react: true, reactr: false, axios: false, flexbox: false, sass: false, mern: false, angular: false });
  };

  onRouter = () => {
    // prettier-ignore
    this.setState({ react: false,  reactr: true, axios: false, flexbox: false, sass: false, mern: false, angular: false });
  };

  onSass = () => {
    // prettier-ignore
    this.setState({ react: false, reactr: false, axios: false, flexbox: false, sass: true, mern: false, angular: false });
  };

  onAxios = () => {
    // prettier-ignore
    this.setState({ react: false, reactr: false, axios: true, flexbox: false, sass: false, mern: false, angular: false });
  };

  onMern = () => {
    // prettier-ignore
    this.setState({ react: false, reactr: false, axios: false, flexbox: false ,mern: true, sass: false, angular: false  });
  };
  onAngular = () => {
    // prettier-ignore
    this.setState({ react: false, reactr: false, axios: false, flexbox: false ,mern: false, sass: false, angular: true  });
  };

  render() {
    return (
      <div className="Projects">
        <h1>My Projects</h1>
        <div className="Categories">
          {/* prettier-ignore */}
          <Menu  onReact={this.onReact} react={this.state.react} onRouter={this.onRouter} reactr={this.state.reactr} onAxios={this.onAxios} axios={this.state.axios} onFlexBox={this.onFlexBox} flexbox={this.state.flexbox} onSass={this.onSass} sass={this.state.sass} onMern={this.onMern} mern={this.state.mern} onAngular={ this.onAngular} angular={this.state.angular} />
        </div>
        <div className="ProjectsDiv">
          {this.state.react ? (
            <Rea list={this.state.projects} />
          ) : this.state.reactr ? (
            <Router list={this.state.projects} />
          ) : this.state.sass ? (
            <Sass list={this.state.projects} />
          ) : this.state.axios ? (
            <Axios list={this.state.projects} />
          ) : this.state.mern ? (
            <Mern list={this.state.projects} />
          ) : this.state.angular ? (
            <Angular list={this.state.projects} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Projects;
