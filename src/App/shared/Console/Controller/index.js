import React, { useContext, useRef } from 'react';

import { ConsoleActionContext } from '../context';
import { registerInputHandler, unregisterInputHandler } from '../Console';
import { title, mainMenu } from './printables';

const Controller = () => {
  const {
    print,
    addLogo,
    clearScreen
  } = useContext(ConsoleActionContext);
  const firstView = useRef(true);
  const inputHandler = useRef(null);

  const getUserInput = async prompt => {
    const oldHandler = inputHandler.current;
    const userInput = await new Promise(acc => {
      if (inputHandler.current) {
        unregisterInputHandler(inputHandler.current.id);
      }
      inputHandler.current = registerInputHandler(input => acc(input));
      print(prompt);
    });
    unregisterInputHandler(inputHandler.current.id);
    inputHandler.current = registerInputHandler(oldHandler.handler);
    return userInput;
  };

  const mainMenuHandler =  input => {
    console.log(input);
    if (input === 'a') {
      clearScreen();
      
    } else if (input === 'w') {
      clearScreen();
    } else if (input === 'c') {
      clearScreen();
    } else {
      print("Sorry, that's not one of the options...");
    }
  };

  if (firstView.current) {
    inputHandler.current = registerInputHandler(mainMenuHandler);
    addLogo(title);
    print(mainMenu);
    firstView.current = false;
  }
  return <span />;
};

export default Controller;
