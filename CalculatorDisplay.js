import React from 'react';
import calculatorImage from '../assets/calc-app.png'; // Import the image

const CalculatorDisplay = () => {
  return (
    <img
      src={calculatorImage} // Use the imported image
      alt="Calculator Display"
    />
  );
};

export default CalculatorDisplay;
