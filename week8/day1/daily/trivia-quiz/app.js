const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


const quizRoutes = require('./routes/quiz');
app.use('/quiz', quizRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
