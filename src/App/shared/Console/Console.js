import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ConsoleContext } from './context';
import { INPUT_EVENT_NAME } from './enums';
import './console.scss';

let currentListeners = [];

export const registerInputHandler = handler => {
  const mHandler = e => handler(e.detail);
  const args = [INPUT_EVENT_NAME, mHandler, false];
  const event = { id: uuid(), handler, args };
  currentListeners.push(event);
  document.addEventListener(...args);
  return event;
};

export const unregisterInputHandler = id => {
  const found = currentListeners.find(e => e.id === id);
  if (found) document.removeEventListener(...found.args);
  return found;
};

const dispatchInputEvent = content => {
  const event = new CustomEvent(INPUT_EVENT_NAME, { detail: content });
  document.dispatchEvent(event);
};

const Console = () => {
  const { lines } = useContext(ConsoleContext);
  const [currentInput, setCurrentInput] = useState('');

  const handleInputChange = e => {
    const val = e.target.value;
    setCurrentInput(val);
  }

  const handleInputKeyUp = e => {
    if (e.key === 'Enter') {
      dispatchInputEvent(currentInput);
      setCurrentInput('');
    }
  };

  return (
    <Container fluid className="ks-console">
      {lines.map(line => (
        <Row key={`Console-previous-line-${line.id}`}>
          <Col className="ks-console__previous-line">
            {line.content}
          </Col>
        </Row>
      ))}
      <Row>
        <span>>></span>
        <input
          className="ks-console__input"
          onChange={handleInputChange}
          value={currentInput}
          onKeyUp={handleInputKeyUp}
        />
      </Row>
    </Container>
  );
};

export default Console;
