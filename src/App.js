import "./App.css";
import React, { useState } from "react";
import Increment from "./components/Increment";
import IncrementButton from "./components/IncrementButton";

function App() {
  const [number, setNumber] = useState(0);
  const incrementNumberHandler = () => {
    let newNum = number;
    newNum += 1;
    setNumber(newNum);
  };
  return (
    <div className="App">
      <Increment number={number}></Increment>
      <IncrementButton
        onChangeNumber={incrementNumberHandler}
      ></IncrementButton>
    </div>
  );
}

export default App;
