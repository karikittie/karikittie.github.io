import React, { useContext, useRef } from 'react';

import { ConsoleActionContext, ConsoleContext } from '../context';
import { registerInputHandler, unregisterInputHandler } from '../Console';
import listedPrograms from '../../Programs';
import { title, defaultHelpText } from './printables';
import { LINE_TYPE } from '../enums';

const programs = [];

const registerProgram = (program) => {
  if (!program.command || !program.handler) {
    throw new Error('Cannot register a program without a command or handler');
  }
  programs.push(program)
};

listedPrograms.forEach(program => registerProgram(program));

const Controller = () => {
  const {
    print,
    addLogo,
    clearScreen
  } = useContext(ConsoleActionContext);
  const { lines } = useContext(ConsoleContext);
  const firstView = useRef(true);
  const inputHandler = useRef(null);

  // add help program
  registerProgram({
    command: 'help',
    hidden: true,
    handler: async (_, csl) => {
      const { print } = csl;
      const output = ['** AVAILABLE COMMANDS **', ' '];
      programs.forEach(p => {
        if (!p.hidden) {
          output.push(`${p.command}${p.helpText ? `  -->  ${p.helpText}` : ''}`);
        }
      });
      print(output);
    }
  });

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

  const systemInputHandler =  async input => {
    const args = input.trim().split(' ').filter(cmd => cmd);
    const foundProgram = programs.find(p => p.command === args[0]);
    if (foundProgram) {
      await foundProgram.handler(input, { print, clearScreen, getUserInput });
    } else {
      print(`Could not find command "${input}"`);
    }
  };

  if (firstView.current) {
    inputHandler.current = registerInputHandler(systemInputHandler);
    addLogo(title);
    firstView.current = false;
  }
  if (lines.filter(l => l.type !== LINE_TYPE.LOGO).length === 0) {
    print([defaultHelpText, ' ']);
  }
  return <span />;
};

export default Controller;
