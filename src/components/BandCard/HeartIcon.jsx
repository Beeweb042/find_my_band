import React from "react";

function HeartIcon() {
  // Stateless component with a placeholder click action.
  // Currently logs a message to simulate a "favorite" action.

  return (
      <button onClick={() => console.log("Ajouté aux favoris")}>
        Je kiffe ❤️
      </button>
  );
};

export default HeartIcon;
