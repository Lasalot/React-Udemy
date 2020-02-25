import React from "react";
import "./userOutput.css";

function Useroutput(props) {
  return (
    <div className="outputStyle">
      <p>Username: {props.userName}</p>
      <p>Random</p>
    </div>
  );
}

export default Useroutput;
