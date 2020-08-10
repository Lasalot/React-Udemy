import React, { Component } from "react";
import Cockpit from "../Components/Cockpit/Cockpit";
import Persons from "../Components/Persons/Persons";
import Aux from "../hoc/Auxilliary";
import withClass from "../hoc/withClass";
import classes from "./App.css";

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
  constructor(props) {
    super(props);
    console.log("[App2.jsx] constructor");
  }
  state = {
    persons: [
      { id: "a", name: "Taki", age: 12 },
      { id: "b", name: "Taki2", age: 14 },
      { id: "c", name: "Taki3", age: 13 },
      { id: "d", name: "Taki4", age: 16 },
    ],
    otherState: "Some other value",
    showPersons: false,
    showCockpit: true,
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //one method
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("[App2.jsx] getDrivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App2.jsx] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App2.jsx] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App2.jsx] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((ember) => {
      return ember.id === id;
    }); //find the index of the person
    const person = {
      ...this.state.persons[personIndex],
    }; //person const will get the persons[0] or other number depending on the index
    person.name = event.target.value; //will get the value from the input
    const persons = [...this.state.persons]; //create persons array (to not modify the original state)
    persons[personIndex] = person; // updates the person const
    this.setState({
      //set the state of persons to the newly created persons
      persons: persons,
    });
  };
  togglePersonsHandler = () => {
    //changes the state of showPersons from true to false , forth and back
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  render() {
    console.log("[App2.jsx] render");
    let persons = null; // set the primary value for persons, if null it shows nothing
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            clicked={this.deletePersonHandler}
            persons={this.state.persons}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      // StyleRoot needed due to Radium
      <Aux>
        {/* <button onClick={() => this.setState({ showCockpit: false })}>
          Remove cockpit
        </button> */}

        {this.state.showCockpit ? (
          <button onClick={() => this.setState({ showCockpit: false })}>
            Remove cockpit
          </button>
        ) : (
          <button onClick={() => this.setState({ showCockpit: true })}>
            Show cockpit
          </button>
        )}

        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}

        {persons}
      </Aux>
    );
  }
}

export default withClass(App2, classes.App);
