

const express = require('express');
const dataService = require('./data/dataService');

const app = express();
const PORT = 5000;

app.get('/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        console.log('Data successfully retrieved');
        res.json(posts);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
