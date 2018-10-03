import React, { Component } from "react";
import { Arwes, Frame, animate, Words } from "@arwes/arwes";
class Ting extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div style={{ display: "inline-block", padding: "20px" }}>
        <Frame animate={true} show="true" level={3} corners={4} layer="primary">
          <h1>
            <Words animate>the ting is...</Words>
          </h1>

          <h1>
            <Words animate>Hello CodeSandbox</Words>
          </h1>
          <h2>
            <Words animate>Start editing to see some magic happen!</Words>
          </h2>
        </Frame>
      </div>
    );
  }
}

export default Ting;
