// Used code from https://www.youtube.com/watch?v=riDzcEQbX6k&t=813s&ab_channel=WebDevSimplified
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionBox = document.getElementById('question-box')
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;



// Wait for the DOM to finish loading before running game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {

    startButton.addEventListener('click', runGame);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        displayNextQuestion();
    })

})


// Used code from https://www.youtube.com/watch?v=riDzcEQbX6k&t=813s&ab_channel=WebDevSimplified
function runGame() {

    console.log('started');
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionBox.classList.remove('hide');
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

function selectAnswer(e) {

    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }

}

function setStatusClass(element, correct) {

    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }

}

function clearStatusClass(element) {

    element.classList.remove('correct');
    element.classList.remove('incorrect');

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
            { text: 'Sperm Whale', correct: false},
            { text: 'Bowhead Whale', correct: false},
        ]
    },
    {
        question: 'Which country is brie cheese originally from?',
        answers: [
            { text: 'Belgium', correct: false},
            { text: 'Switzerland', correct: false},
            { text: 'France', correct: true},
            { text: 'Andorra', correct: false},
        ]
    },
    {
        question: 'What year was Heinz established?',
        answers: [
            { text: '1927', correct: false},
            { text: '1869', correct: true},
            { text: '1895', correct: false},
            { text: '1903', correct: false},
        ]
    },
    {
        question: 'What is the capital of Iceland?',
        answers: [
            { text: 'Helsinki', correct: false},
            { text: 'Oslo', correct: false},
            { text: 'Reykjavík', correct: true},
            { text: 'Stockholm', correct: false},
        ]
    },
    {
        question: 'Who painted the Mona Lisa?',
        answers: [
            { text: 'Raphael', correct: false},
            { text: 'Donatello', correct: false},
            { text: 'Michelangelo', correct: false},
            { text: 'Leonardo da Vinci', correct: true},
        ]
    },
    {
        question: 'Which planet is closest to the sun?',
        answers: [
            { text: 'Mercury', correct: true},
            { text: 'Saturn', correct: false},
            { text: 'Earth', correct: false},
            { text: 'Neptune', correct: false},
        ]
    },
    {
        question: 'Who came second in the FIFA Womens World Cup in 2019?',
        answers: [
            { text: 'France', correct: false},
            { text: 'England', correct: false},
            { text: 'Germany', correct: false},
            { text: 'Netherlands', correct: true},
        ]
    },
    {
        question: 'What is the largest country in the world?',
        answers: [
            { text: 'Canada', correct: false},
            { text: 'China', correct: false},
            { text: 'Russia', correct: true},
            { text: 'Australia', correct: false},
        ]
    },
    {
        question: 'How many valves does the heart have?',
        answers: [
            { text: 'Two', correct: false},
            { text: 'Eight', correct: false},
            { text: 'Four', correct: true},
            { text: 'Six', correct: false},
        ]
    },
    {
        question: 'Which city had the first ever fashion week?',
        answers: [
            { text: 'London', correct: false},
            { text: 'New York', correct: true},
            { text: 'Paris', correct: false},
            { text: 'Milan', correct: false},
        ]
    },
    {
        question: 'What nut is in the middle of a Ferrero Rocher?',
        answers: [
            { text: 'Hazelnut', correct: true},
            { text: 'Brazil nut', correct: false},
            { text: 'Almond', correct: false},
            { text: 'Cashew nut', correct: false},
        ]
    },
    {
        question: 'What is a baby rabbit called?',
        answers: [
            { text: 'A cub', correct: false},
            { text: 'A kit', correct: true},
            { text: 'A leveret', correct: false},
            { text: 'A pup', correct: false},
        ]
    },
    {
        question: 'What fruit takes the scientific name Mangifera indica?',
        answers: [
            { text: 'Fig', correct: false},
            { text: 'Apple', correct: false},
            { text: 'Passion fruit', correct: false},
            { text: 'Mango', correct: true},
        ]
    },
    {
        question: 'How many kilometres are there in a mile?',
        answers: [
            { text: '1.5km', correct: false},
            { text: '1.8km', correct: false},
            { text: '1.6km', correct: true},
            { text: '1.2km', correct: false},
        ]
    },
    {
        question: 'Who is the spiritual leader of Tibet?',
        answers: [
            { text: 'Deepak Chopra', correct: false},
            { text: 'Pope Francis', correct: false},
            { text: 'Yitzhak Yosef', correct: false},
            { text: 'The Dalai Lama', correct: true},
        ]
    },
    {
        question: 'What is the Papaver rhoeas flower better known as?',
        answers: [
            { text: 'A poppy', correct: true},
            { text: 'A pansy', correct: false},
            { text: 'A peony', correct: false},
            { text: 'A petunia', correct: false},
        ]
    },
    {
        question: 'How many elements are there on the periodic table?',
        answers: [
            { text: '118', correct: true},
            { text: '97', correct: false},
            { text: '105', correct: false},
            { text: '129', correct: false},
        ]
    },
    {
        question: 'In which country was the mojito cocktail created?',
        answers: [
            { text: 'Mexico', correct: false},
            { text: 'Cuba', correct: true},
            { text: 'USA', correct: false},
            { text: 'Panama', correct: false},
        ]
    },
    {
        question: 'How many sides does a heptadecagon?',
        answers: [
            { text: '70', correct: false},
            { text: '27', correct: false},
            { text: '17', correct: true},
            { text: '37', correct: false},
        ]
    },
    {
        question: 'How many bones does a shark have?',
        answers: [
            { text: '102', correct: false},
            { text: '206', correct: false},
            { text: '54', correct: false},
            { text: '0', correct: true},
        ]
    },    
]