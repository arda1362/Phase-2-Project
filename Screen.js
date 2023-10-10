import React from 'react';
import { useCalculatorContext } from '../context/CalcContext'; // Update the import path

function Screen() {
  const { calc } = useCalculatorContext();

  return (
    <div className="screen">
      <p>{calc.num}</p>
      <p>{calc.sign}</p>
      <p>{calc.res}</p>
    </div>
  );
}

export default Screen;


