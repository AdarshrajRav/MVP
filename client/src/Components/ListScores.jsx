import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';
import styled from 'styled-components';

const axios = require('axios');

const ListScores = function ListScores({ username, round, count }) {

  return(

    <CSS.List>
      <div>{count}</div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <div>{username}</div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <div>{round}</div>
    </CSS.List>

  )
}

export default ListScores;