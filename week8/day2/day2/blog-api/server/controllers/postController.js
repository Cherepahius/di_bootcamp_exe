const postModel = require('../models/postModel');

const getPosts = async (req, res) => {
    try {
        const posts = await postModel.getAllPosts();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getPost = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const newPost = await postModel.createPost(title, content);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedPost = await postModel.updatePost(req.params.id, title, content);
        if (updatedPost) {
            res.status(200).json(updatedPost);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deletePost = async (req, res) => {
    try {
        await postModel.deletePost(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getPosts, getPost, createPost, updatePost, deletePost };
