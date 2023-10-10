import React, { useEffect, useState } from 'react';
import axios from 'axios';


function CalculatorComponent() {
  const [calculations, setCalculations] = useState([]);
  const [calculationData, setCalculationData] = useState({ expression: '' });

  useEffect(() => {
    axios.get('http://localhost:3000/calculations')
      .then(response => {
        setCalculations(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCalculationData({ ...calculationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/calculations', calculationData)
      .then(response => {
        // Handle the response data (e.g., show a success message)
        console.log(response.data);
        // After successfully adding a calculation, you might want to fetch the updated list of calculations
        // to display the new calculation in the list.
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      {/* Render calculations from the GET request */}
      <ul>
        {calculations.map(calculation => (
          <li key={calculation.id}>{calculation.expression} = {calculation.result}</li>
        ))}
      </ul>

      {/* Create a form to make a POST request and add a new calculation */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="expression"
          placeholder="Enter a calculation"
          value={calculationData.expression}
          onChange={handleInputChange}
        />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default CalculatorComponent;
