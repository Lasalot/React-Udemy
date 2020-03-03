import Radium, { StyleRoot } from "radium";
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App2 extends Component {
  state = {
    persons: [
      { id: "a", name: "Taki", age: 12 },
      { id: "b", name: "Taki2", age: 14 },
      { id: "c", name: "Taki3", age: 13 },
      { id: "d", name: "Taki4", age: 16 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); //one method
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(ember => {
      return ember.id === id;
    }); //find the index of the person

    const person = {
      ...this.state.persons[personIndex]
    }; //person const will get the persons[0] or other number depending on the index

    person.name = event.target.value; //will get the value from the input

    const persons = [...this.state.persons]; //create persons array (to not modify the original state)
    persons[personIndex] = person; // updates the person const

    this.setState({
      //set the state of persons to the newly created persons
      persons: persons
    });
  };

  togglePersonsHandler = () => {
    //changes the state of showPersons from true to false , forth and back
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solud blue",
      padding: "8px",
      cursor: "pointer",
      color: "white",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      } //Works only with Radium package
    };

    let persons = null; // set the primary value for persons, if null it shows nothing

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "#ffc6c4",
        color: "black"
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); //add the red class to <p> if persons count less than 2
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); //classes = ['red', 'bold']
    }

    console.log(classes);

    return (
      <StyleRoot>
        <div className="App">
          <h1>It is a React App</h1>
          <p className={classes.join(" ")}>This really works</p>
          <button onClick={this.togglePersonsHandler} style={style}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App2);
