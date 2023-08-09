import React from 'react';
import './App.css';

import Usestate from './hooks/Usestate.js';
import Usestate1 from './hooks/Usestate1';
import Useref from './hooks/Useref';

function App() {
  return (
    <div className="App">
      <Usestate />
      <Usestate1 />
      <Useref />
    </div>
  );
}

export default App;
