import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

// const StyledButton = styled.button` // styled button using styled-components
//   background-color: ${props => (props.alt ? "red" : "green")};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8 px;
//   cursor: pointer;
//   color: white;
//   &:hover {
//     background-color: ${props => (props.alt ? "salmon" : "lightgreen")};
//     color: black;
//   }
// `;

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
    let persons = null; // set the primary value for persons, if null it shows nothing
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              // <ErrorBoundary key={person.id}>
                <Person
                  key={person.id}
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />{" "}
              // </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); //add the red class to <p> if persons count less than 2
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    console.log(assignedClasses);

    return (
      // StyleRoot needed due to Radium

      <div className={classes.App}>
        <h1>It is a React App Practice</h1>
        <p className={assignedClasses.join(" ")}>This really works</p>
        <button
          className={btnClass.join(" ")}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App2;
