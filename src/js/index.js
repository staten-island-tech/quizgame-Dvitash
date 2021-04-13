console.log("connected");

const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame);

function startGame(){
    console.log('started game');
    startButton.classList.add('hide');
}

function setNextQuestion(){

}

function selectAnswer(){

}