import React from "react";
import "../styles/input.css";

const InputComponent = ({ state, setState, placeholder, type, id }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type || "text"} // Default to 'text' if type is not provided
        value={state}
        id={id}
        onChange={(e) => setState(e.target.value)} // Handle state change
        className="custome-input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
