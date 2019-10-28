import React from 'react';

import Controller from './shared/Console/Controller';
import { ConsoleProvider, Console } from './shared/Console';

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
