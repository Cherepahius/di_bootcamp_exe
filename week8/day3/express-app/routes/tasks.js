const express = require('express');
const fs = require('fs-extra');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

const tasksFilePath = './tasks.json';

const readTasks = async () => {
    try {
        const data = await fs.readFile(tasksFilePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') return [];
        throw err;
    }
};


const writeTasks = async (tasks) => {
    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
};


router.get('/', async (req, res) => {
    try {
        const tasks = await readTasks();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Error reading tasks file', error: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const tasks = await readTasks();
        const task = tasks.find(task => task.id === req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Error reading tasks file', error: err.message });
    }
});


router.post('/', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const newTask = { id: uuidv4(), title, description };

    try {
        const tasks = await readTasks();
        tasks.push(newTask);
        await writeTasks(tasks);
        res.status(201).json(newTask);
    } catch (err) {
        res.status(500).json({ message: 'Error writing tasks file', error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(task => task.id === req.params.id);
        if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });

        tasks[taskIndex] = { id: req.params.id, title, description };
        await writeTasks(tasks);
        res.json(tasks[taskIndex]);
    } catch (err) {
        res.status(500).json({ message: 'Error writing tasks file', error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const tasks = await readTasks();
        const taskIndex = tasks.findIndex(task => task.id === req.params.id);
        if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });

        tasks.splice(taskIndex, 1);
        await writeTasks(tasks);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: 'Error writing tasks file', error: err.message });
    }
});

module.exports = router;
