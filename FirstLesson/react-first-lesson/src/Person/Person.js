import React from "react";
import classes from "./Person.css";

const person = props => {
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
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error("Something went wrong");
  }

  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={props.click}>
        Username: {props.name} Age: {props.age}
      </p>

      <p>{props.child}</p>
      <input
        placholder="Name"
        value={props.name}
        type="text"
        onChange={props.changed}
      />
    </div>
  );
};

export default person;
