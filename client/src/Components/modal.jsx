import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';

const axios = require('axios');

// creats modal that allows user to add recored
const Modal = function Modal({ round, restart }) {
  const [name, setName] = useState('');
  const sendData = function sendData() {
    axios.post(`/score?username=${name}&round=${round}`)
      .then(() => restart())
      .catch(() => new Error('error in axios'));
  }
  return (
    <div>
      <CSS.Modal>
        <CSS.ModalContent>
          <CSS.Close onClick={() => restart()}><div>X</div></CSS.Close>
          <CSS.Center>
            <div>You got to round: {round}</div>
            Enter name:
          <input type="text" name="sum" required maxLength="20" size="60" value={name} onChange={(e) => setName(e.target.value)} />
            <CSS.MainButtons type="button"  onClick={() => sendData()} >SUBMIT</CSS.MainButtons>
          </CSS.Center>
        </CSS.ModalContent>
      </CSS.Modal>
    </div>
  );
};

export default Modal;