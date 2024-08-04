import React, { Component } from 'react';

class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => {
            if (counter === 4) {
                throw new Error('I crashed!');
            }
            return { counter: counter + 1 };
        });
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.counter}
            </div>
        );
    }
}

export default BuggyCounter;