const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());


let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post' }
];


app.get('/posts', (req, res) => {
    res.json(posts);
});


app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});


app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});


app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts[postIndex] = {
            id: postId,
            title: req.body.title,
            content: req.body.content
        };
        res.json(posts[postIndex]);
    } else {
        res.status(404).send('Post not found');
    }
});


app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Post not found');
    }
});

app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
