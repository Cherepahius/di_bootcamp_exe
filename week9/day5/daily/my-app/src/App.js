import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('add'); // Default operation is addition

  // This function handles the calculation based on the selected operation
  const handleCalculation = () => {
    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        res = num2 !== 0 ? num1 / num2 : 'Infinity';
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
      />
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(parseFloat(e.target.value))}
      />
      <button onClick={handleCalculation}>Calculate</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;