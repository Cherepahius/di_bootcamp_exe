import React, { useState, useEffect } from 'react';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts.json')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            <h1>Hi This is a Title</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
