import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App2 extends Component {
  state = {
    persons: [
      { name: "Taki", age: 12 },
      { name: "Taki2", age: 14 },
      { name: "Taki3", age: 13 },
      { name: "Taki4", age: 16 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  // switchNameHandler = newName => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 12 },
  //       { name: "Taki2", age: 14 },
  //       { name: "Taki3", age: 13 }
  //     ]
  //   });
  // };

  // nameChangedHandler = event => {
  //   this.setState({
  //     persons: [
  //       { name: "Max", age: 12 },
  //       { name: event.target.value, age: 14 },
  //       { name: "Taki3", age: 13 }
  //     ]
  //   });
  // };

  togglePersonsHandler = () => {
    //changes the state of showPersons from true to false , forth and back
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      border: "1px solid black"
    };

    let persons = null; // set the primary calue for persons, if null it shows nothing

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>It is a React App</h1>
        <button onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App2;
