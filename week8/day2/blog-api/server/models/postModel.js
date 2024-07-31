let posts = [];
let currentId = 1;

const getAllPosts = async () => {
    return posts;
};

const getPostById = async (id) => {
    return posts.find(post => post.id === parseInt(id));
};

const createPost = async (title, content) => {
    const newPost = { id: currentId++, title, content };
    posts.push(newPost);
    return newPost;
};

const updatePost = async (id, title, content) => {
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    if (postIndex !== -1) {
        posts[postIndex] = { id: parseInt(id), title, content };
        return posts[postIndex];
    }
    return null;
};

const deletePost = async (id) => {
    const postIndex = posts.findIndex(post => post.id === parseInt(id));
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        return true;
    }
    return false;
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
