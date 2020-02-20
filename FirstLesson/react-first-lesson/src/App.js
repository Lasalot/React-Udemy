import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi I am a React app! </h1>
        <h1>Another Heading</h1>
        <Person />
      </div>
    );

    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", { className: "App" }, "Hi, I am a React App!!") //Create element without JSX method.
    // );
  }
}

export default App;
