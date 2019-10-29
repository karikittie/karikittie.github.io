import React, { createContext, useReducer } from 'react';
import uuid from 'uuid/v4';

import { LINE_ACTION_TYPE, LINE_TYPE } from './enums';

export const ConsoleContext = createContext();
export const ConsoleActionContext = createContext();

const lineReducer = (state, action) => {
  switch (action.type) {
    case LINE_ACTION_TYPE.ADD_LINE:
      return [...state, {
        id: uuid(),
        content: action.data,
        type: LINE_TYPE.NORMAL
      }];
    case LINE_ACTION_TYPE.ADD_LOGO:
      return [
        ...action.data.map(l => ({
          id: uuid(),
          content: l,
          type: LINE_TYPE.LOGO
        })),
        ...state.filter(l => l.type !== LINE_TYPE.LOGO)
      ]
    case LINE_ACTION_TYPE.CLEAR_LINES:
      return state.filter(l => l.type === LINE_TYPE.LOGO);
    case LINE_ACTION_TYPE.UPDATE_LINE:
      const { data: next } = action;
      return state.map(line => line.id === next.id ? { ...line, ...next } : line);
    default:
      throw new Error(`Unrecognized console line action: "${action.type}"`);
  }
};

const ConsoleProvider = ({ children }) => {
  const [lines, lineDispatch] = useReducer(lineReducer, []);

  const print = content => {
    if (!content) return;
    if (Array.isArray(content)) {
      content.forEach(l => lineDispatch({
        type: LINE_ACTION_TYPE.ADD_LINE,
        data: l
      }));
    } else {
      lineDispatch({
        type: LINE_ACTION_TYPE.ADD_LINE,
        data: content
      });
    }
  };

  const addLogo = content => {
    lineDispatch({
      type: LINE_ACTION_TYPE.ADD_LOGO,
      data: Array.isArray(content) ? content : [content]
    });
  };

  const clearScreen = () => {
    lineDispatch({
      type: LINE_ACTION_TYPE.CLEAR_LINES
    });
  };

  return (
    <ConsoleContext.Provider
      value={{ lines }}
    >
      <ConsoleActionContext.Provider
        value={{
          print,
          addLogo,
          clearScreen
        }}
      >
        {children}
      </ConsoleActionContext.Provider>
    </ConsoleContext.Provider>
  )
}

export default ConsoleProvider;
