import React, { useState } from 'react';
import quotes from './quotes';
import './QuoteGenerator.css';

const getRandomQuote = (currentQuote) => {
    let newQuote;
    do {
        newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote.quote === currentQuote.quote);
    return newQuote;
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const QuoteGenerator = () => {
    const [quote, setQuote] = useState(quotes[0]);
    const [backgroundColor, setBackgroundColor] = useState('#f4f4f9');
    const [textColor, setTextColor] = useState('#000000');

    const handleNewQuote = () => {
        const newQuote = getRandomQuote(quote);
        setQuote(newQuote);
        setBackgroundColor(getRandomColor());
        setTextColor(getRandomColor());
    };

    return (
        <div className="quote-container" style={{ backgroundColor, color: textColor }}>
            <h1>{quote.quote}</h1>
            <p>- {quote.author}</p>
            <button style={{ backgroundColor: textColor, color: backgroundColor }} onClick={handleNewQuote}>New Quote</button>
        </div>
    );
};

export default QuoteGenerator;