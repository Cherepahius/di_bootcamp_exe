
let books = [
    { id: 1, title: "Book One", author: "Author One", publishedYear: 2001 },
    { id: 2, title: "Book Two", author: "Author Two", publishedYear: 2002 },
    { id: 3, title: "Book Two plus One", author: "Author Unknown", publishedYear: 647 },
];


const getAllBooks = (req, res) => {
    res.json(books);
};


const getBookById = (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send({ message: "Book not found" });
    }
};


const createBook = (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook
};
