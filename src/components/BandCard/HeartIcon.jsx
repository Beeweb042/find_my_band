import React from "react";
import "./HeartIcon.css";

function HeartIcon() {
  // Stateless component with a placeholder click action.
  // Currently logs a message to simulate a "favorite" action.

  return (
      <button onClick={() => console.log("Ajouter aux favoris")}>
        ❤️
      </button>
  );
};

export default HeartIcon;
