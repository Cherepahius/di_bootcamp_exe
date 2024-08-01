import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carinfo }) {
    const [colour, setColour] = useState("red");
    return (
        <div>
            <h1>This car is a {carinfo.model} and the colour is {colour}</h1>
            <Garage size='small' />
        </div>
    );
}

export default Car;