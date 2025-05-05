import React from "react";
import "./ButtonFindMyBand.css";

function ButtonFindMyBand(props) {
  // Functional stateless component that renders the main action button.
  // Receives `onClick` as a prop from App to trigger random band selection.

  return (
      <button onClick={props.onClick}>
          Find my Band !
      </button>
  );
};

export default ButtonFindMyBand;
