console.log("connected");

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questionContainer = [
    {
        question: "Who is on the 20$ bill?",
        answers:
        {
            a: "Frederick Douglass",
            b: "Andrew Jackson",
            c: "Barack Obama",
            d: "Benjamin Franklin"
        },
        correctAnswer: "b"
    },
    {
        question: "Who is on the penny?",
        answers:
        {
            a: "Taylor Swift",
            b: "Donald Trump",
            c: "John Adams",
            d: "Abraham Lincoln"
        },
        correctAnswer: "d"
    }
]