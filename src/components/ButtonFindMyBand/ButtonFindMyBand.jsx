import React from "react";

function ButtonFindMyBand(props) {
  // Functional stateless component that renders the main action button.
  // Receives `onClick` as a prop from App to trigger random band selection.

  return (
    <button className="
    bg-gradient-to-b from-pink-500 to-purple-800
    text-white
    uppercase tracking-wide font-bold 
    py-4 px-8 rounded-full
    transition duration-200 ease-in-out hover:scale-105 
    cursor-pointer   
    "
    onClick={props.onClick}>
  Find My Band!
</button>

  );
};

export default ButtonFindMyBand;
