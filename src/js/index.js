console.log("connected");

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const resultsScreen = document.getElementById("results");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let correctAmt = 0;

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  console.log("started game");
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  correctAmt = 0;
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  resultsScreen.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if ((selectedButton.dataset = correct)) {
    correctAmt++;
    console.log(correctAmt);
  }
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    resultsScreen.classList.remove("hide");
    resultsScreen.textContent =
      "Score: " + correctAmt + "/" + questions.length + " Correct!";
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question: "1. Who is on the penny?",
    answers: [
      { text: "Jhon Adams", correct: false },
      { text: "George Bush", correct: false },
      { text: "Abraham Lincoln", correct: true },
      { text: "The other George Bush", correct: false },
    ],
  },
  {
    question: "2. Who is on the $20 bill?",
    answers: [
      { text: "Benjamin Franklin", correct: false },
      { text: "Andrew Jackson", correct: true },
      { text: "George Washington", correct: false },
      { text: "Bill Clinton", correct: false },
    ],
  },
  {
    question: "3. How many quarters are worth $5?",
    answers: [
      { text: "Twenty", correct: true },
      { text: "Fifteen", correct: false },
      { text: "Orangutan", correct: false },
      { text: "Twenty-five", correct: false },
    ],
  },
  {
    question: "4. How many dollars are equal to 247 dimes?",
    answers: [
      { text: "2,470", correct: false },
      { text: "247", correct: false },
      { text: "24.7", correct: true },
      { text: "2.47", correct: false },
    ],
  },
  {
    question: "5. How much money can you get if you sell 10 chickens?",
    answers: [
      { text: "$150", correct: true },
      { text: "$1,000,000", correct: false },
      { text: "$1.99", correct: false },
      { text: "$2.00", correct: false },
    ],
  },
  {
    question: "6. How many different quarters are there?",
    answers: [
      { text: "1", correct: false },
      { text: "100", correct: false },
      { text: "George Washington", correct: false },
      { text: "50", correct: true },
    ],
  },
  {
    question: "7. Who is on the half dollar?",
    answers: [
      { text: "Jhon L. Kennedy", correct: false },
      { text: "Jhon F. Kennedy", correct: false },
      { text: "John F. Kennedy", correct: true },
      { text: "John F. Kenedy", correct: false },
    ],
  },
  {
    question: "8. Who is on the GOLD dollar coin?",
    answers: [
      { text: "Sacagawea", correct: true },
      { text: "Aewagacas", correct: false },
      { text: "Harriet Tubman", correct: false },
      { text: "Pocahontas", correct: false },
    ],
  },
  {
    question: "9. Which one of these is a bank?",
    answers: [
      { text: "Bank of the U.S.A.", correct: false },
      { text: "Run", correct: false },
      { text: "Villijbank", correct: false },
      { text: "Capital One", correct: true },
    ],
  },
  {
    question: "10. Who is on the $50 dollar bill?",
    answers: [
      { text: "Ulysses P. Grant", correct: false },
      { text: "Ulisses S. Grant", correct: false },
      { text: "Ulysses S. Grant", correct: true },
      { text: "Ulyses S. Grant", correct: false },
    ],
  },
];
