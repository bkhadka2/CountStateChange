import React from "react";
import "./Increment.css";

const Increment = (props) => {
  return (
    <div className="container">
      <h1>{props.number}</h1>
    </div>
  );
};

export default Increment;
