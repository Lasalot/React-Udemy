import React from "react";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Username: {props.name} Age: {props.age}
      </p>

      <p>{props.child}</p>
      <input placholder="Name" value={props.name} type="text" onChange={props.changed} />
      {/* <input placholder="Age" value={props.age} type="text" /> */}
    </div>
  );
};

export default person;
