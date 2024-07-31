
const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());


let books = [
    { id: 1, title: "Book One", author: "Author One", publishedYear: 1556 },
    { id: 2, title: "Book Two", author: "Author Two", publishedYear: 4546 },
    { id: 3, title: "Book Two plus One", author: "Author Unknown", publishedYear: 647 },
];


const bookRoutes = require('./server/routes/bookRoutes');
app.use('/api/books', bookRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
