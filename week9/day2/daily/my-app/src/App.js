import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>
      {languages.map((language, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <span>{language.votes} </span>
          <span>{language.name} </span>
          <button onClick={() => handleVote(index)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
