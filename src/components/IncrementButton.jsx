import React from "react";
import "./IncrementButton.css";

const IncrementButton = (props) => {
  const clickHandler = () => {
    props.onChangeNumber();
  };

  return (
    <div>
      <button className="button" onClick={clickHandler}>
        Increment
      </button>
    </div>
  );
};

export default IncrementButton;
