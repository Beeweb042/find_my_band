import React, { useState } from "react";
import Bands from "./data/bands";
import ButtonFindMyBand from "./components/ButtonFindMyBand/ButtonFindMyBand";
import BandCard from "./components/BandCard/BandCard";

function App() {
  // state to store the random selected band
  const [selectedBand, setSelectedBand] = useState(null);

  // handler function : select a band randomly in "bands.js" and update the state
  function handleClick() {
    const randomBand = Math.floor(Math.random() * Bands.length);
    console.log("groupe aléatoire : ", randomBand);

    setSelectedBand(Bands[randomBand]);
    console.log("groupe mis en mémoire : ", Bands[randomBand]);
  }

  return (
    <>
      <div className=" flex flex-col gap-6 items-center min-h-max p-16">
        <h1 className="text-5xl text-red-700 font-bold flex-auto">
          Découvre ta nouvelle pépite métal
        </h1>

        {/* Trigger random band selection on click */}
        <ButtonFindMyBand onClick={handleClick} />

        {/* Conditionally render BandCard if a band has been selected */}
        {selectedBand && <BandCard band={selectedBand} />}
      </div>
    </>
  );
}

export default App;
