import React, { useState } from "react";

const Phone = () => {
    const [brand, setBrand] = useState("Samsung");
    const [model, setModel] = useState("Galaxy S20");
    const [color, setColor] = useState("black");
    const [year, setYear] = useState(2020);

    const changeColor = () => {
        setColor("blue");
    };

    return (
        <div>
            <h1>Phone: {brand} {model} {color} {year}</h1>
            <button onClick={changeColor}></button>
        </div>
    )
}

export default Phone