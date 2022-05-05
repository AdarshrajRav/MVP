import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';

const axios = require('axios');

const Scores = function Scores() {
  return(
    <div>

      <CSS.Scores>
        <h1>Top Scores:</h1>
        <CSS.List>
        <div>1:</div>
          <div>Goku</div>
          <div>9001</div>
        </CSS.List>
      </CSS.Scores>
    </div>
  )
}

export default Scores;