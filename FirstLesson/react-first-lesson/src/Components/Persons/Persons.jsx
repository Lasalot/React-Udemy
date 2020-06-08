import React, { PureComponent } from "react"; //PureComponent does the same job as shouldComponentUpdate would do, it does a props check, whether anything has been changed and it will render the component only if any props has been changed
import Person from "./Person/Person";

class Persons extends PureComponent {
  // static getDrivedStateFromProps(props, state) {
  //   console.log("Persons.js getDriverStateFromProps");
  //   return state;
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Persons.js shouldComponentUpdate");
  //   if (
  //     nextProps !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Persons.js getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Persons.js componentDidUpdate");
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
