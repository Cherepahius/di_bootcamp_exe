const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());


const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },

];

let scores = {};


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


app.get('/emoji', (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [randomEmoji.name];
    while (options.length < 4) {
        const randomOption = emojis[Math.floor(Math.random() * emojis.length)].name;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    shuffle(options);
    res.json({ emoji: randomEmoji.emoji, options });
});


app.post('/guess', (req, res) => {
    const { emoji, guess, player } = req.body;
    const correctAnswer = emojis.find(e => e.emoji === emoji).name;
    if (guess === correctAnswer) {
        if (!scores[player]) scores[player] = 0;
        scores[player] += 1;
        res.json({ correct: true, score: scores[player] });
    } else {
        res.json({ correct: false, score: scores[player] || 0 });
    }
});


app.get('/leaderboard', (req, res) => {
    const leaderboard = Object.entries(scores).map(([player, score]) => ({ player, score }));
    leaderboard.sort((a, b) => b.score - a.score);
    res.json(leaderboard);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
