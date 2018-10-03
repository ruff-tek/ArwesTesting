import React, { Component } from "react";
import { Arwes, Project, Frame, animate, Words } from "@arwes/arwes";
class Proj extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ padding: 20 }}>
        <Project animate header="Upcoming events and News Feed">
          {anim => (
            <p>
              <Words animate show={anim.entered}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis laboris nisi ut aliquip ex. Duis aute
                irure. Consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud.
              </Words>
            </p>
          )}
        </Project>
        <Project
          style={{ marginTop: "40px" }}
          animate
          header="Upcoming events and News Feed"
        >
          {anim => (
            <p>
              <Words animate show={anim.entered}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis laboris nisi ut aliquip ex. Duis aute
                irure. Consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud.
              </Words>
            </p>
          )}
        </Project>
      </div>
    );
  }
}

export default Proj;
