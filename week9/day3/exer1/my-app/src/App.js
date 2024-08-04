//import React, { Component } from 'react';
//import ErrorBoundary from './ErrorBoundary';

//class BuggyCounter extends Component {
//  constructor(props) {
//    super(props);
//    this.state = { counter: 0 };
//    this.handleClick = this.handleClick.bind(this);
//  }

//  handleClick() {
//    this.setState(({ counter }) => {
//      if (counter === 4) {
//        throw new Error('I crashed!');
//      }
//      return { counter: counter + 1 };
//    });
//  }

//  render() {
//    return (
//      <div onClick={this.handleClick}>
//        {this.state.counter}
//      </div>
//    );
//  }
//}

//First simulation
//import React, { Component } from 'react';
//import ErrorBoundary from './ErrorBoundary';
//import BuggyCounter from './BuggyCounter';

//class App extends Component {
//  render() {
//    return (
//      <div>
//        <ErrorBoundary>
//          <BuggyCounter />
//          <BuggyCounter />
//        </ErrorBoundary>
//      </div>
//    );
//  }
//}

//export default App;

//Second simulation

//import React, { Component } from 'react';
//import ErrorBoundary from './ErrorBoundary';
//import BuggyCounter from './BuggyCounter';

//class App extends Component {
//  render() {
//    return (
//      <div>
//        <ErrorBoundary>
//          <BuggyCounter />
//        </ErrorBoundary>
//        <ErrorBoundary>
//          <BuggyCounter />
//        </ErrorBoundary>
//      </div>
//    );
//  }
//}

//export default App;

//Third simulation

import React, { Component } from 'react';
import BuggyCounter from './BuggyCounter';

class App extends Component {
  render() {
    return (
      <div>
        <BuggyCounter />
      </div>
    );
  }
}

export default App;