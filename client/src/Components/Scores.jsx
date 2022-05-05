import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';
import ListScores from './ListScores';

const axios = require('axios');

const Scores = function Scores({ render }) {
  // get data from database
  const [results, setResults] = useState([]);
  let count = 0;
  useEffect(() => {
    axios.get(`score`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => new Error(err));
  }, [render]);
  return(
    <div>

      <CSS.Scores>
        <h1>Top Scores:</h1>
        {results.map((e) => {
          count += 1;
          return (
        <ListScores username={e['username']} round={e.round} count={count} />
        )}
        )}
      </CSS.Scores>
    </div>
  )
}

export default Scores;