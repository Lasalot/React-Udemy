import React from "react";
import "./userInput.css";

function Userinput(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.change}
      className="text"
    />
  );
}

export default Userinput;
