const express = require('express');
const router = express.Router();

const todos = [];
let nextId = 1;

router.get('/', (req, res) => {
    res.json(todos);
});

router.post('/', (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });

    const newTodo = { id: nextId++, text };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    const todo = todos.find(t => t.id == id);
    if (!todo) return res.status(404).json({ error: 'To-do item not found' });

    if (text) todo.text = text;
    res.json(todo);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = todos.findIndex(t => t.id == id);
    if (index === -1) return res.status(404).json({ error: 'To-do item not found' });

    todos.splice(index, 1);
    res.status(204).end();
});

module.exports = router;