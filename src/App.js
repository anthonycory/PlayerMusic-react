
import React from 'react'
import './App.css';
import Player from "./Player"

import masterclass from "./mp3/masterclass.mp3"
import drillfr from "./mp3/drillfr.mp3"



function App() {

  const songs = [
    {
      title: "DJ Kayz feat. RK & LANDY - Masterclass",
      url: masterclass,
    },
    {
      title: "Gazo - DrillFr",
      url : drillfr,
    }
  ]

  return (
    <div className="App">
      <Player song={songs}  />
    </div>
  );
}

export default App;
