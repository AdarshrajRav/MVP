import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';
import Pokemon from './Pokemon';
import Countdown from 'react-Countdown';

const axios = require('axios');

const Game = function Game({ round, setRound }) {
  const [arr, setArr] = useState([true]);
  // max is 151
  const [poke, setPoke] = useState(Math.floor((Math.random() * 150) + 1));

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
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
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
          <Countdown date={Date.now() + 5000} renderer={renderer} />
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