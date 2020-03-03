import Radium from "radium";
import React from "react";
import "./Person.css";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        Username: {props.name} Age: {props.age}
      </p>

      <p>{props.child}</p>
      <input placholder="Name" value={props.name} type="text" onChange={props.changed} />
    </div>
  );
};

export default Radium(person);
