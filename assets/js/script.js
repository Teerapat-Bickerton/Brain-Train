// Used code from https://www.youtube.com/watch?v=riDzcEQbX6k&t=813s&ab_channel=WebDevSimplified
const nextButton = document.getElementById('next-btn')
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

// Wait for the DOM to finish loading before running game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {

    runGame();

})


// Used code from https://www.youtube.com/watch?v=riDzcEQbX6k&t=813s&ab_channel=WebDevSimplified
function runGame() {

    console.log('started');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    displayNextQuestion();

}

function displayNextQuestion() {

    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

function showQuestion(question) {

    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {

    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

  }

function selectAnswer() {

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