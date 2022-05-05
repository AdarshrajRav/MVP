import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';
import styled from 'styled-components';

const axios = require('axios');

const ListScores = function ListScores({ username, round }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(count + 1);
  }, [round]);

  return(

    <CSS.List>
      <div>{count}:</div>
      <div>{username}</div>
      <div>{round}</div>
    </CSS.List>

  )
}

export default ListScores;