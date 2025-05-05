import React, { useState } from 'react';
import Bands from './data/bands';
import ButtonFindMyBand from './components/ButtonFindMyBand/ButtonFindMyBand';
import BandCard from './components/BandCard/BandCard';
import './App.css'

function App() {
  // state to store the random selected band
  const [selectedBand, setSelectedBand] = useState(null);

  // handler function : select a band randomly in "bands.js" and update the state
  function handleClick() {
    const randomBand = Math.floor(Math.random() * Bands.length);
    console.log("groupe aléatoire : ", randomBand)

    setSelectedBand(Bands[randomBand]);
    console.log("groupe mis en mémoire : ", Bands[randomBand]);
  };

  
  return (
    <>
    <h1>DECOUVRE TON NOUVEAU GROUPE METAL</h1>

    {/* Trigger random band selection on click */}
    <ButtonFindMyBand onClick={handleClick} />

    {/* Conditionally render BandCard if a band has been selected */}
    { selectedBand &&
      <BandCard band={selectedBand} />
    }

    </>
  );
};

export default App;
