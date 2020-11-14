import PropTypes from 'prop-types';
import React, { Component } from "react";
import AuthContext from '../../../context/auth-context';
import Auxilliary from "../../../hoc/Auxilliary";
import withClass from "../../../hoc/withClass";
import classes from "../Person/Person.css";





class Person extends Component {
  // other way to use ref (newer)
constructor(props) {
  super(props);
  this.inputElementRef = React.createRef()
}

static contextType = AuthContext


componentDidMount() {


// this.inputElement.focus() One way of using reference

  // other way to use ref
this.inputElementRef.current.focus()
console.log(this.context.authenticated)
}


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

      // Instead of Auxillary, React.Fragment can be used as it is a built in option
      <Auxilliary>

          {this.context.authenticated? <p>Authenticated</p> : <p>Please log in</p>}


        <p onClick={this.props.click}>
          Username: {this.props.name} Age: {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
        // One way to use reference
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref= {this.inputElementRef}
          placholder="Name"
          type="text"
          onChange={this.props.changed}
          value={this.props.name}

        />
      </Auxilliary>
    );
  }
}


// Define props what they should be within this component
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
