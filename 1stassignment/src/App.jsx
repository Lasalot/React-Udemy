import React, { useState } from "react";
import "./App.css";
import Userinput from "./UserInput/userInput";
import Useroutput from "./UserOutput/userOutput.jsx";

function App() {
  const [userName, setUserName] = useState("Teszt");
  function uNameEventHandler(event) {
    setUserName(event.target.value);
  }

  return (
    <div className="App ">
      <Userinput change={uNameEventHandler} value={userName} />
      <Useroutput userName={userName} />
      <Useroutput userName={userName} />
      <Useroutput userName={userName} />
    </div>
  );
}

export default App;
