import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';
import Pokemon from './Pokemon';
import Countdown from 'react-Countdown';
import Modal from './modal'

const axios = require('axios');

const Game = function Game({ round, setRound }) {
  const [arr, setArr] = useState([true]);
  // max is 151
  const [poke, setPoke] = useState(Math.floor((Math.random() * 150) + 1));
  const [timer, setTimer] = useState(true);

  let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  const next = function next() {
    setRound(round + 1);
    arr.push(false);
    arr.push(false);
    for(let i = 0; i < arr.length; i++) {
      let index = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
    setPoke(Math.floor(Math.random() * 151))
    axios.get
  }
  const restart = function restart() {
    setTimer(false);
    setRound(1);
    setArr([true]);
    setTimer(true);
  }
  // will turn this to model
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed && timer) {
      // Render a complete state
      return <Modal round={round} restart={() => restart()} />;
    } else {
      // Render a countdown
      return (
        <span>
          {seconds}
        </span>
      );
    }
  };

  return(
    <div>
      <CSS.GameBar>
        <h1>
          Find:
          <img src={`${url}${poke}.png`} alt="pokemon" loading="lazy" />
        </h1>
        <h1>Round:{round}</h1>
        <h1>Countdown:
          {round != 1 ? <Countdown date={Date.now() + 5000} renderer={renderer} /> : 'First Round'}
        </h1>
      </CSS.GameBar>
      <CSS.Game>
        {arr.map((e) => (
          <Pokemon next={next} right={e} poke={poke} />
        ))}

      </CSS.Game>
    </div>
  )
}

export default Game;