import React, { Component } from "react";
import {
  ThemeProvider,
  Frame,
  Words,
  createTheme,
  Animate,
  SoundsProvider,
  createSounds,
  Arwes,
  withSounds,
  Button
} from "@arwes/arwes";
import Ting from "./components/ting";
import Proj from "./components/Proj";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showComponent1: false,
      showComponent2: true
    };

    this.hide_overlay = this.hide_overlay.bind(this);
  }

  hide_overlay() {
    if (this.state.showComponent1 == true) {
      this.setState({
        showComponent1: false,
        showComponent2: true
      });
    } else {
      this.setState({
        showComponent1: true,
        showComponent2: false
      });
    }
  }
  render() {
    return (
      <div className="App">
        <Button hover="True" onClick={this.hide_overlay}>
          Press and shit
        </Button>
        <div className="ff">{this.state.showComponent1 ? <Ting /> : null}</div>
        <div className="ff">{this.state.showComponent2 ? <Proj /> : null}</div>
      </div>
    );
  }
}
export default App;
