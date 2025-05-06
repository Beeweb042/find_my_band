import React from "react";

function ButtonFindMyBand(props) {
  // Functional stateless component that renders the main action button.
  // Receives `onClick` as a prop from App to trigger random band selection.

  return (
    <button className="
    bg-amber-400 hover:bg-red-700 
    text-black hover:text-white
    uppercase tracking-wide font-extrabold 
    py-4 px-8 rounded-full
    transition duration-200 ease-in-out hover:scale-105 
    cursor-pointer   
    border-4 border-red-700 
    shadow-md shadow-amber-500
    "
    onClick={props.onClick}>
  Find My Band!
</button>

  );
};

export default ButtonFindMyBand;
