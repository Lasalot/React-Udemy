import React from "react";

const person = props => {
  return (
    <div>
      <p>Username: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>{props.child}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
};

export default person;
