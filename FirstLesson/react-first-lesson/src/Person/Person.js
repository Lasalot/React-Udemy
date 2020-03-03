import React from "react";
// import "./Person.css";
import styled from "styled-components";

const person = props => {
  const style = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };

  const StyledDiv = styled.div`
    width: 60%;
    border: 1px solid #eee;
    margin: 16px auto;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
      width: 450px;
    }
  `;
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <p onClick={props.click}>
        Username: {props.name} Age: {props.age}
      </p>

      <p>{props.child}</p>
      <input placholder="Name" value={props.name} type="text" onChange={props.changed} />
    </StyledDiv>
  );
};

export default person;
