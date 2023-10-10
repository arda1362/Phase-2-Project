import React, { useState } from 'react';
import Screen from './Screen';
import CalculatorDisplay from './CalculatorDisplay';
import './CalculatorDisplay.css'
import * as math from 'mathjs'; // Import all functions and objects from mathjs
// Calculator.js

// ... (previous code)

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleButtonClick = (value) => {
      if (value === '=') {
        try {
          const evaluatedResult = math.evaluate(input);
          setResult(evaluatedResult);
        } catch (error) {
          setResult('Error');
        }
      } else if (value === 'C') {
        setInput('');
        setResult('');
      } else {
        setInput((prevInput) => prevInput + value);
      }
    };
  
    const buttons = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
    ];
  
    return (
        <div>
        <Screen input={input} result={result} />
        <CalculatorDisplay />
        <div className="buttons">
          {buttons.map((button, index) => (
            <button key={index} onClick={() => handleButtonClick(button)}>
              {button}
            </button>
          ))}
          <button onClick={() => handleButtonClick('C')}>C</button>
        </div>
      </div>
    );
  };
  
  export default Calculator;
  