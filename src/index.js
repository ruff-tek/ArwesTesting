import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  ThemeProvider,
  Frame,
  Words,
  createTheme,
  animate,
  SoundsProvider,
  createSounds,
  Arwes,
  withSounds,
  Button
} from "@arwes/arwes";
import Ting from "./components/ting";
import Proj from "./components/Proj";
import "./styles.css";

class App2 extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={createTheme()}>
          <Arwes animate show>
            <App />
          </Arwes>
        </ThemeProvider>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App2 />, rootElement);
