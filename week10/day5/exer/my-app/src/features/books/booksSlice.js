import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: [
        { id: 1, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
        { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 3, title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
        { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
        { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' },
        { id: 7, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
        { id: 8, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' }
    ],
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
});

export const selectBooks = (state) => state.books.books;

export default booksSlice.reducer;
