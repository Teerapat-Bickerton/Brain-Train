const shuffledQuestions, currentQuestionIndex;

// Wait for the DOM to finish loading before running game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {

    runGame();

})


// Copied code from https://www.youtube.com/watch?v=riDzcEQbX6k&t=813s&ab_channel=WebDevSimplified
function runGame() {

    console.log('started');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    displayNextQuestion();

}

function displayNextQuestion() {

}

function checkAnswer() {

}

function incrementScore() {

}

function incrementWrong() {

}

const questions = [
    {
        question: 'What is the biggest animal in the world?',
        answers: [
            { text: 'Blue Whale', correct: true},
            { text: 'Finn Whale', correct: false},
        ]
    }
]