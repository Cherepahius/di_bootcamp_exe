import React from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals';

const user = {
  firstname: "John",
  lastname: "Doe",
  favAnimals: ['dog', 'cat', 'mouse', 'rabbit']
}

function App() {
  return (
    <div className="App">
      <h1>{user.firstname}</h1>
      <h1>{user.lastname}</h1>
      <UserFavoriteAnimals animals={user.favAnimals} />
    </div>
  );
}

export default App