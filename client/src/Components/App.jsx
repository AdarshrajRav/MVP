import React, { useState, useEffect } from 'react';
import CSS from './css';
import Scores from './Scores'
import Game from './Game'
const axios = require('axios');

function App() {
  const [render, setRender] = useState('game');
  const [round, setRound] = useState(1);

  const renderComponent = function renderComponent() {
    if(render === 'scores') {
      return <Scores render={render} />;
    }
    return <Game round={round} setRound={setRound} />
  }
  return (
    <CSS.Center>
      <CSS.Header>
        <CSS.Title>Find That Pokemon!</CSS.Title>
      </CSS.Header>
      <CSS.Header>
        <CSS.MainButtons type="button"  onClick={() => setRender('game')} >Play</CSS.MainButtons>
        <CSS.MainButtons type="button" onClick={() => setRender('scores')} >High Scores</CSS.MainButtons>
      </CSS.Header>
      {renderComponent()}
    </CSS.Center>
  )
}

export default App;