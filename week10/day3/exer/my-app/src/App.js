import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';  // Corrected path
import TodoList from './features/todos/TodoList';
import AddTodo from './features/todos/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
