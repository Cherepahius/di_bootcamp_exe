const express = require('express');
const router = express.Router();
const triviaQuestions = require('../trivia');
let quizState = {
    currentQuestionIndex: 0,
    score: 0
};
router.get('/', (req, res) => {
    if (quizState.currentQuestionIndex >= triviaQuestions.length) {
        return res.status(200).send('The quiz is finished. Please visit /quiz/score to see your final score.');
    }

    const question = triviaQuestions[quizState.currentQuestionIndex].question;
    res.status(200).json({ question });
});
router.post('/', (req, res) => {
    if (quizState.currentQuestionIndex >= triviaQuestions.length) {
        return res.status(400).send('The quiz is finished. Please visit /quiz/score to see your final score.');
    }

    const userAnswer = req.body.answer;
    const correctAnswer = triviaQuestions[quizState.currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        quizState.score++;
        res.status(200).send('Correct! Moving to the next question.');
    } else {
        res.status(200).send('Incorrect. Moving to the next question.');
    }

    quizState.currentQuestionIndex++;
});
router.get('/score', (req, res) => {
    res.status(200).json({ score: quizState.score });
});

module.exports = router;
