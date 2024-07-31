const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));