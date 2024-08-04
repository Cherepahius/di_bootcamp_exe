import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert('unmounted');
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true
    };
    this.changeColor = this.changeColor.bind(this);
    this.deleteChild = this.deleteChild.bind(this);
  }

  componentDidMount() {
    alert('useEffect reached');


    setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    alert('useEffect reached');
    console.log('after update');
  }

  shouldComponentUpdate(nextProps, nextState) {
    //return false;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  changeColor() {
    this.setState({ favoriteColor: 'blue' });
  }

  deleteChild() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <h1>{this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change Color</button>
        <button onClick={this.deleteChild}>Delete</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

export default Color;