import React, { Component } from "react";

class Lists extends Component {
  render() {
    return (
      <div className="List">
        <h3>Learning Process :</h3>
        <ul>
          <h4>HTML5 & CSS3 :</h4>
          <ul>
            <li>
              I have been studying Web Development for over a year. It took me a
              couple of month to learn the markup side of coding. I believe the
              biggest challenge when it comes to learning that, is training your
              mind to visualize how the HTML and the CSS interacts with each
              other.
            </li>
          </ul>
          <h4>Vanilla JavaScript :</h4>
          <ul>
            <li>
              When I started learning Vanilla Js, I struggled learing it because
              I was attempting to learn it at the same time as jQuery. However,
              once I realized the benefit of learing the pure JavaScript, I
              focused all of my attention on it.
            </li>
          </ul>
          <h4>Rect & ES6</h4>
          <ul>
            <li>
              After I was comfortbale with Vanill Js, I began learing React.
              When it came to React, the part that I struggled with the most was
              figuring out how State and Props work. After I got my head around
              that, I was able to focus on integrating ES6 and realized the
              benefits.
            </li>
          </ul>
        </ul>
        <br />
        <h3>My Hobbies :</h3>
        <ul>
          <h4>Football :</h4>
          <ul>
            <li>
              When I'm not studying or spending time with my wife, I enjoy
              watching and keeping up with football. I root for the New England
              Patriots, but I enjoy keeping up with the Houston Texans as well.
            </li>
          </ul>
        </ul>
      </div>
    );
  }
}

export default Lists;
