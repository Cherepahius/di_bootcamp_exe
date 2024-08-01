import react from 'react';
import './App.css';

function App() {
  const myelements = <h1>I love JSX</h1>
  const sum = 5 + 5;

  return (
    <div className='App'>
      <p>Hello World</p>
      {myelements}
      <p>React is {sum} times better with JSX</p>
    </div>
  )
}

export default App