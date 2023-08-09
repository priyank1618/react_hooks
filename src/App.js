import React from 'react';
import './App.css';

import Usestate from './hooks/Usestate';
import Usestate1 from './hooks/Usestate1';
import Useref from './hooks/Useref';
import Usereducer from './hooks/Usereducer';

function App() {
  return (
    <div className="App">
      <Usestate />
      <Usestate1 />
      <Useref />
      <Usereducer />
    </div>
  );
}

export default App;
