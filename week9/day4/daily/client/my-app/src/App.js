import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    responseMessage: ''
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/hello');
    const data = await response.json();
    this.setState({ message: data.message });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const input = event.target.elements.input.value;
    const response = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: input })
    });
    const data = await response.json();
    this.setState({ responseMessage: data.message });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.message}</h1>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="input" />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.responseMessage}</p>
        </header>
      </div>
    );
  }
}

export default App;
