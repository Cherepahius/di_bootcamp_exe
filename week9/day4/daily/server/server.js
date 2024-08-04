const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.options('*', cors()); // Enable preflight for all routes

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    const { message } = req.body;
    console.log('Received POST request:', message);
    res.send({ message: `I received your POST request. This is what you sent me: ${message}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
