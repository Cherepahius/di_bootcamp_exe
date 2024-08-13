import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import BookList from './components/BookList';

const App = () => (
  <Provider store={store}>
    <BookList />
  </Provider>
);

export default App;
