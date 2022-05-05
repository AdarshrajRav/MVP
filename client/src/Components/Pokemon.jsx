import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';
import styled from 'styled-components';

const axios = require('axios');

const Pokemon = function Pokemon({ next, right, poke }) {
  let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const render = function() {
    if(right) {
      return <img src={`${url}${poke}.png`} alt="pokemon" loading="lazy" onClick={() => next()} />
    }
    let temp = Math.floor((Math.random() * 150) + 1);
    if (temp === poke) {
      temp += 10;
    }
    return  <img src={`${url}${temp}.png`} alt="full circle" loading="lazy" />
  }

  return(
    <div>
      {render()}
    </div>
  )
}

export default Pokemon;