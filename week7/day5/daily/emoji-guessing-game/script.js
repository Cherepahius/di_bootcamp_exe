let playerName = prompt("Enter your name:");
let score = 0;

async function getNewEmoji() {
    const response = await fetch('http://localhost:3000/emoji');
    const data = await response.json();
    document.getElementById('emoji').innerText = data.emoji;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    data.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerText = option;
        optionDiv.onclick = () => submitGuess(data.emoji, option);
        optionsDiv.appendChild(optionDiv);
    });
}

async function submitGuess(emoji, guess) {
    const response = await fetch('http://localhost:3000/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emoji, guess, player: playerName })
    });
    const data = await response.json();
    document.getElementById('feedback').innerText = data.correct ? 'Correct!' : 'Wrong!';
    document.getElementById('score').innerText = `Score: ${data.score}`;
    getNewEmoji();
    updateLeaderboard();
}

async function updateLeaderboard() {
    const response = await fetch('http://localhost:3000/leaderboard');
    const data = await response.json();
    const leaderboardDiv = document.getElementById('leaderboard');
    leaderboardDiv.innerHTML = '<h2>Leaderboard</h2>';
    data.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.innerText = `${entry.player}: ${entry.score}`;
        leaderboardDiv.appendChild(entryDiv);
    });
}

getNewEmoji();
updateLeaderboard();