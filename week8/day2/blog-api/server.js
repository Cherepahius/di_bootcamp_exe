const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


const postRoutes = require('./server/routes/postRoutes');
app.use('/posts', postRoutes);


app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
