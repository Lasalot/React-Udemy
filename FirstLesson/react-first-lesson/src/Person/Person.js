import React from "react";

const person = props => {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <hr></hr>
      <p>{props.child}</p>
      <input onChange={props.change} value={props.name} type="text"></input>
    </div>
  );
};

export default person;
