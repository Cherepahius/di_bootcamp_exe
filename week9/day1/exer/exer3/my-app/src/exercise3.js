import react, { Component } from 'react';
import './exercise.css';

const style_header = {
    color: 'red',
    backgroundColor: 'lightblue',
    padding: '10px',
    fontFamily: 'Comic Sans MS',
}

class Exercise extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a Header</h1>
                <p>This is a paragraph</p>
                <a href='https://reactjs.org'>This is a link</a>
                <form>
                    <label>This is a Form:</label><br />
                    <input type='text' placeholder='Enter your name: ' />
                    <input type='submit' value='Submit' />
                </form>
                <h2> Here is an Image:</h2>
                <img src={require('./1.png')} alt="React" />
                <h2>Here is a List</h2>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

            </div>
        );
    }
}

export default Exercise