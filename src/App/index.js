import React from 'react';

import Controller from './Console/Controller';
import { ConsoleProvider, Console } from './Console';

import './root-styles.scss';

function App() {
  return (
    <ConsoleProvider>
      <Console />
      <Controller />
    </ConsoleProvider>
  )
}

export default App;
