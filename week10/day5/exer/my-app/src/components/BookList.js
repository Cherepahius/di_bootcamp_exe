import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    selectHorrorBooks,
    selectFantasyBooks,
    selectScienceFictionBooks,
} from '../features/books/selectors';

const BookList = () => {
    const [genre, setGenre] = useState('All');

    const books = useSelector((state) => {
        switch (genre) {
            case 'Horror':
                return selectHorrorBooks(state);
            case 'Fantasy':
                return selectFantasyBooks(state);
            case 'Science Fiction':
                return selectScienceFictionBooks(state);
            default:
                return state.books.books;
        }
    });

    return (
        <div>
            <h1>Book Inventory</h1>
            <div>
                <label>Select Genre: </label>
                <select onChange={(e) => setGenre(e.target.value)} value={genre}>
                    <option value="All">All</option>
                    <option value="Horror">Horror</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Science Fiction">Science Fiction</option>
                </select>
            </div>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} by {book.author} (Genre: {book.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
