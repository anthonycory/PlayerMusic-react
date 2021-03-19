
import React from 'react'
import './App.css';
import Player from "./Player"

import masterclass from "./mp3/masterclass.mp3"
import drillfr from "./mp3/drillfr.mp3"
import reve from "./mp3/reve.mp3"
import money from "./mp3/money.mp3"



function App() {

  const songs = [
    {
      title: "DJ Kayz feat. RK & LANDY - Masterclass",
      url: masterclass,
    },
    {
      title: "Gazo - DrillFr",
      url : drillfr,
    },
    {
      title: "Deen Burbigo - Tu rêves ft. Nekfeu",
      url: reve,
    },
    {
      title: "Ninho - Money feat. Faouzia",
      url: money,
    }
  ]

  return (
    <div className="App">
      <Player song={songs}  />
    </div>
  );
}

export default App;
