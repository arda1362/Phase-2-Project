import React, { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();

export const useCalculatorContext = () => {
  return useContext(CalculatorContext);
};

export const CalculatorProvider = ({ children }) => { // Export CalculatorProvider
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  });

  const providerValue = {
    calc,
    setCalc
  };

  return (
    <CalculatorContext.Provider value={providerValue}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
