import React from "react";
import "./ButtonFindMyBand.css";

function ButtonFindMyBand(props) {
  // Functional stateless component that renders the main action button.
  // Receives `onClick` as a prop from App to trigger random band selection.

  return (
    <button className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded"
    onClick={props.onClick}>
  Find My Band!
</button>

  );
};

export default ButtonFindMyBand;
