import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CSS from './css';

const axios = require('axios');

// creats modal that allows user to right review
const Modal = function Modal({ round }) {

  return (
    <div>
      <CSS.Modal>
        <CSS.ModalContent>
          <CSS.Close onClick={() => setRender(false)}><div>X</div></CSS.Close>
          <CSS.CenterInfo>
          TEST
          </CSS.CenterInfo>
        </CSS.ModalContent>
      </CSS.Modal>
    </div>
  );
};

export default Modal;