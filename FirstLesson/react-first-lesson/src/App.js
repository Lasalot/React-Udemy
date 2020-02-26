import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

function App() {
  const [name, setName] = useState("Taki");
  const [showPersons, setShowPersons] = useState(false);
  const [emberek, setEmberek] = useState([
    { name: "Taki", age: 12 },
    { name: "Taki2", age: 14 },
    { name: "Taki3", age: 13 }
  ]);

  function setNameHandler(event) {
    setName(event.target.value);
  }

  function togglePersonsHandler(props) {
    setShowPersons(prevValue => !prevValue);
    console.log(showPersons);
  }

  let persons = null;

  if (showPersons) {
    persons = ( //Persons to be shown
      <div>
        {emberek.map(ember => {
          return <Person name={ember.name} age={ember.age} />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <h1> Hi I am a React app! </h1>
      <h1>Another Heading</h1>
      <button onClick={togglePersonsHandler}>Show Persons</button>
      {persons}
    </div>
  );
}

export default App;
