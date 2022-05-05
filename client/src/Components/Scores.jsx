import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';
import ListScores from './ListScores';

const axios = require('axios');

const Scores = function Scores({ render }) {
  // get data from database
  const [results, setResults] = useState([]);
  // for list scores to keep track of tables
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
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
        {results.map((e) =>
        <ListScores username={e['username']} round={e.round} count={count} setCount={setCount} />
        )}
      </CSS.Scores>
    </div>
  )
}

export default Scores;