import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div>
      <CalculatorDisplay total={0} />
      <div className="buttons-container">
        <ActionButton value="clear" />
        <ActionButton value="0" />
      </div>
    </div>
  );
};

export default App;
