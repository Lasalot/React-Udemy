import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App2 extends Component {
  state = {
    persons: [
      { name: "Taki", age: 12 },
      { name: "Taki2", age: 14 },
      { name: "Taki3", age: 13 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 12 },
        { name: "Taki2", age: 14 },
        { name: "Taki3", age: 13 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 12 },
        { name: event.target.value, age: 14 },
        { name: "Taki3", age: 13 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      border: "1px solid black"
    };

    let persons = null;

    return (
      <div className="App">
        <h1>It is a React App</h1>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {this.state.showPersons === true ? (
          <div>
            <Person name="Taki" />
            <Person name="Taki" />
            <Person name="Taki" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App2;
