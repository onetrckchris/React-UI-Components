import React from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  const numberOne = {
    buttonStyle: 'number-button',
    value: 1
  }

  const numberTwo = {
    buttonStyle: 'number-button',
    value: 2
  }

  const numberThree = {
    buttonStyle: 'number-button',
    value: 3
  }

  const numberFour = {
    buttonStyle: 'number-button',
    value: 4
  }

  const numberFive = {
    buttonStyle: 'number-button',
    value: 5
  }

  const numberSix = {
    buttonStyle: 'number-button',
    value: 6
  }

  const numberSeven = {
    buttonStyle: 'number-button',
    value: 7
  }

  const numberEight = {
    buttonStyle: 'number-button',
    value: 8
  }

  const numberNine = {
    buttonStyle: 'number-button',
    value: 9
  }

  const divisionOperation = {
    buttonStyle: 'operation-button',
    value: '÷'
  }

  const multiplicationOperation = {
    buttonStyle: 'operation-button',
    value: 'x'
  }

  const subtractionOperation = {
    buttonStyle: 'operation-button',
    value: '-'
  }

  const additionOperation = {
    buttonStyle: 'operation-button',
    value: '+'
  }

  const resultOperation = {
    buttonStyle: 'operation-button',
    value: '='
  }

  return (
    <div>
      <CalculatorDisplay total={0} />
      <div className="content-container">
        <div className="buttons-container">
          <ActionButton value="clear" />
          <div className="row1">
            <NumberButton numberButtonProps={numberSeven} />
            <NumberButton numberButtonProps={numberEight} />
            <NumberButton numberButtonProps={numberNine} />
          </div>
          <div className="row2">
            <NumberButton numberButtonProps={numberFour} />
            <NumberButton numberButtonProps={numberFive} />
            <NumberButton numberButtonProps={numberSix} />
          </div>
          <div className="row3">
            <NumberButton numberButtonProps={numberOne} />
            <NumberButton numberButtonProps={numberTwo} />
            <NumberButton numberButtonProps={numberThree} />
          </div>
          <ActionButton value="0" />
        </div>
        <div className="operation-buttons-container">
          <NumberButton numberButtonProps={divisionOperation} />
          <NumberButton numberButtonProps={multiplicationOperation} />
          <NumberButton numberButtonProps={subtractionOperation} />
          <NumberButton numberButtonProps={additionOperation} />
          <NumberButton numberButtonProps={resultOperation} />
        </div>
      </div>
    </div>
  );
};

export default App;
