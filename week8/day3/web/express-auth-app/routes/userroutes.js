const express = require('express');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const router = express.Router();

const usersFile = './users.json';


const readUsers = () => {
    try {
        const data = fs.readFileSync(usersFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading users file:", error);
        return [];
    }
};


const writeUsers = (users) => {
    try {
        fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error("Error writing to users file:", error);
    }
};


router.post('/register', async (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    if (!name || !lastName || !email || !username || !password) {
        return res.status(400).send('All fields are required');
    }

    const users = readUsers();
    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return res.status(400).send('error1');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: users.length + 1, name, lastName, email, username, password: hashedPassword });
    writeUsers(users);

    res.status(201).send('register');
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send('Username and password are required');
    }

    const users = readUsers();
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(400).send('error2');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send('error2');
    }

    res.status(200).send('login');
});


router.get('/users', (req, res) => {
    const users = readUsers();
    res.json(users);
});


router.get('/users/:id', (req, res) => {
    const users = readUsers();
    const user = users.find(user => user.id == req.params.id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.json(user);
});


router.put('/users/:id', (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    const users = readUsers();
    const userIndex = users.findIndex(user => user.id == req.params.id);

    if (userIndex === -1) {
        return res.status(404).send('User not found');
    }

    if (name) users[userIndex].name = name;
    if (lastName) users[userIndex].lastName = lastName;
    if (email) users[userIndex].email = email;
    if (username) users[userIndex].username = username;
    if (password) users[userIndex].password = bcrypt.hashSync(password, 10);

    writeUsers(users);
    res.json(users[userIndex]);
});

module.exports = router;
