
const express = require('express');
const router = express.Router();


const books = [];
let nextId = 1;


router.get('/', (req, res) => {
    res.json(books);
});


router.post('/', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({ error: 'Title and author are required' });
    }
    const newBook = { id: nextId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find(b => b.id === parseInt(id));
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    if (title) book.title = title;
    if (author) book.author = author;
    res.json(book);
});


router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));
    if (index === -1) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books.splice(index, 1);
    res.status(204).end();
});

module.exports = router;
