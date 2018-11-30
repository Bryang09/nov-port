import React, { Component } from "react";

class Lists extends Component {
  state = {
    process: false,
    learn: false,
    hobbie: false,
    html: false,
    js: false,
    es6: false,
    tt: false,
    udemy: false,
    yt: false,
    football: false,
    soccer: false,
    mma: false,

    list: [
      {
        id: 0,
        title: "Learning Process",
        sub1: "HTML5 & CSS3",
        sub1Text:
          "I have been studying Web Development for over a year. It took me a couple of month to learn the markup side of coding. I believe the biggest challenge when it comes to learning that, is training your mind to visualize how the HTML and the CSS interacts with each other.",
        sub2: "Vanilla JavaScript",
        sub2Text:
          "When I started learning Vanilla Js, I struggled learing it because I was attempting to learn it at the same time as jQuery. However, once I realized the benefit of learing the pure JavaScript, I focused all of my attention on it.",
        sub3: "React & ES6",
        sub3Text:
          "After I was comfortbale with Vanilla Js, I began learing React. When it came to React, the part that I struggled with the most wasfiguring out how State and Props work. After I got my head around that, I was able to focus on integrating ES6 and realized the benefits."
      },
      {
        id: 1,
        title: "Where I Learned",
        sub1: "Team Treehouse",
        sub1Text:
          " I began my learning with Team Treehouse. In Team Treehouse, I learned the majority of my markup skills. I ended up completing the Front End Track before moving on to Udemy.",
        sub2: "Udemy",
        sub2Text:
          "I was attracted to Udemy due to the popular course:  The Web Developer Bootcamp by Colt Steele  , and I am so glad that I took it. After learning that course, I  was able to understand things more clearly. After that course, I took others such as React 16 - The Complete Guide by Maximillian Schwarzmuller , MERN Stack Front To Back by Brad Traversy , and currently Angular 7 - The Complete Guide by Maximillian Schwarzmuller ",
        sub3: "Youtube",
        sub3Text:
          "While it may not be the most popular answer, I found that Youtube has incredible learning content such as Crash Courses, Real Life Projects, Desingning Courses and much more."
      },
      {
        id: 2,
        title: "My Hobbies",
        sub1: "Football",
        sub1Text:
          "When I'm not studying or spending time with my wife, I enjoy watching and keeping up with football. I root for the New England Patriots, but I enjoy keeping up with the Houston Texans as well.",
        sub2: "Socccer",
        sub2Text:
          " I played soccer for 10 years as a kid. That is why soccer has a special place in my heart. I enjoy watching it from time to time, but doubt I could play it now.",
        sub3: "UFC / Boxing / MMA",
        sub3Text:
          "I trained Martial Arts for 3 years and I fell in love with it. Though I could no longer do it myself, I enjoy watching and analyzing the fighting style, regardless of which form."
      }
    ]
  };

  onProcess = () => {
    this.setState({ process: !this.state.process });
  };
  onLearn = () => {
    this.setState({ learn: !this.state.learn });
  };
  onHobbies = () => {
    this.setState({ hobbie: !this.state.hobbie });
  };
  onHTML = () => {
    this.setState({ html: !this.state.html });
  };
  onJs = () => {
    this.setState({ js: !this.state.js });
  };
  onES6 = () => {
    this.setState({ es6: !this.state.es6 });
  };
  onTreehouse = () => {
    this.setState({ tt: !this.state.tt });
  };
  onUdemy = () => {
    this.setState({ udemy: !this.state.udemy });
  };
  onYoutube = () => {
    this.setState({ yt: !this.state.yt });
  };
  onFootball = () => {
    this.setState({ football: !this.state.football });
  };
  onSoccer = () => {
    this.setState({ soccer: !this.state.soccer });
  };
  onMMA = () => {
    this.setState({ mma: !this.state.mma });
  };

  render() {
    const list = this.state.list.map(res => {
      return (
        <div key={res.id}>
          <h3
            onClick={
              res.id === 0
                ? this.onProcess
                : res.id === 1
                ? this.onLearn
                : res.id === 2
                ? this.onHobbies
                : null
            }
            className={
              (this.state.process && res.id === 0) ||
              (this.state.learn && res.id === 1) ||
              (this.state.hobbie && res.id === 2)
                ? null
                : "hidden"
            }
          >
            {res.title} :
          </h3>
          <ul
            style={
              res.id === 0 && this.state.process
                ? { display: "block" }
                : res.id === 1 && this.state.learn
                ? { display: "block" }
                : res.id === 2 && this.state.hobbie
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <h4
              onClick={
                res.id === 0
                  ? this.onHTML
                  : res.id === 1
                  ? this.onTreehouse
                  : res.id === 2
                  ? this.onFootball
                  : null
              }
              className={
                (this.state.html && res.id === 0) ||
                (this.state.tt && res.id === 1) ||
                (this.state.football && res.id === 2)
                  ? null
                  : "hidden"
              }
            >
              {res.sub1} :
            </h4>
            <ul
              style={
                (res.id === 0 && this.state.html) ||
                (res.id === 1 && this.state.tt) ||
                (res.id === 2 && this.state.football)
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <li>{res.sub1Text}</li>
            </ul>
            <h4
              onClick={
                res.id === 0
                  ? this.onJs
                  : res.id === 1
                  ? this.onUdemy
                  : res.id === 2
                  ? this.onSoccer
                  : null
              }
              className={
                (this.state.js && res.id === 0) ||
                (this.state.udemy && res.id === 1) ||
                (this.state.soccer && res.id === 2)
                  ? null
                  : "hidden"
              }
            >
              {res.sub2} :
            </h4>
            <ul
              style={
                (this.state.js && res.id === 0) ||
                (this.state.udemy && res.id === 1) ||
                (this.state.soccer && res.id === 2)
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <li>{res.sub2Text}</li>
            </ul>
            <h4
              onClick={
                res.id === 0
                  ? this.onES6
                  : res.id === 1
                  ? this.onYoutube
                  : res.id === 2
                  ? this.onMMA
                  : null
              }
              className={
                (this.state.es6 && res.id === 0) ||
                (this.state.yt && res.id === 1) ||
                (this.state.mma && res.id === 2)
                  ? null
                  : "hidden"
              }
            >
              {res.sub3} :
            </h4>
            <ul
              style={
                (this.state.es6 && res.id === 0) ||
                (this.state.yt && res.id === 1) ||
                (this.state.mma && res.id === 2)
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <li>{res.sub3Text}</li>
            </ul>
          </ul>
        </div>
      );
    });

    return <div className="List">{list}</div>;
  }
}

export default Lists;
