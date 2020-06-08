import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  // const StyledDiv = styled.div`
  //   width: 60%;
  //   border: 1px solid #eee;
  //   margin: 16px auto;
  //   box-shadow: 0 2px 3px #ccc;
  //   padding: 16px;
  //   text-align: center;

  //   @media (min-width: 500px) {
  //     width: 450px;
  //   }
  // `;
  render() {
    console.log("[Person.js] rendering...");

    return (
      // <div className="Person" style={style}>
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Username: {this.props.name} Age: {this.props.age}
        </p>

        <p>{this.props.child}</p>
        <input
          placholder="Name"
          value={this.props.name}
          type="text"
          onChange={this.props.changed}
        />
      </div>
    );
  }
}

export default Person;
