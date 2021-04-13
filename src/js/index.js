console.log("connected");

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const resultsScreen = document.getElementById('results');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let correctAmt = 0;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame(){
    console.log('started game');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    correctAmt = 0;
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question)
{
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct)
        {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState()
{
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    resultsScreen.classList.add('hide');
    while(answerButtonsElement.firstChild)
    {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (selectedButton.dataset = correct) {
        correctAmt++;
        console.log(correctAmt);
    }
    if(shuffledQuestions.length > currentQuestionIndex + 1)
    {
        nextButton.classList.remove('hide');
    }
    else
    {
        startButton.innerText = "Restart";
        startButton.classList.remove('hide');
        resultsScreen.classList.remove('hide');
        resultsScreen.textContent = "Score: " + correctAmt + "/" + questions.length + " Correct!";
    }
}

function setStatusClass(element, correct)
{
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element)
{
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Who is on the $20 bill?',
        answers: [
            {text: 'Benjamin Franklin', correct: false},
            {text: 'Andrew Jackson', correct: true}
        ]
    },
    {
        question: 'Who is on the $20 bill?',
        answers: [
            {text: 'Benjamin Franklin', correct: false},
            {text: 'Andrew Jackson', correct: true}
        ]
    },
    {
        question: 'Who is on the $20 bill?',
        answers: [
            {text: 'Benjamin Franklin', correct: false},
            {text: 'Andrew Jackson', correct: true}
        ]
    }
]