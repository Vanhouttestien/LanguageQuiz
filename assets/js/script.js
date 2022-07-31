// code from Web Dev Simplified via https://www.youtube.com/watch?v=riDzcEQbX6k with own adaptations
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const image = document.getElementById("image");
const instructions=document.getElementById("instructions")

let shuffledQuestions, currentQuestionIndex
let scoreBox= document.getElementById("score")

// eventlistener, start and next button 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

// increment score, code from love math project from Code institute
function incrementScore() {
  let oldScore= parseInt(document.getElementById("score-number").innerText);
  document.getElementById("score-number").innerText = ++oldScore;
}

// startgame, randomize questions, hide startbutton + instructions and show questionfield
function startGame() {
  startButton.classList.add('hide');
  instructions.classList.add('hide');
  scoreBox.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

//reset state and show next
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

// show question, answer and images
function showQuestion(question) {
  questionElement.innerText = question.question;
  image.classList.add('img');
  image.style.backgroundImage = question.img;
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

/*reset to default state*/ 
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


// check selected answer if correct increment score
function selectAnswer(e) {
  let selectedButton = e.target
  let correct = selectedButton.dataset.correct;
  if(correct){incrementScore()}
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    feedback();
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')}
}

/* add correct and incorrect class to answers*/ 
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct){
    element.classList.add('correct');
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function feedback(){
let endScore=parseInt(document.getElementById("score-number").innerText)
let feedback= document.getElementById("feedback")
scoreBox.classList.remove("hide")
if(endScore<1){feedback.innerText="Hmm... you may need to practice a bit more."}
else if  (endScore<2){feedback.innerText="Keep on Learning."} 
else if  (endScore<3){feedback.innerText="With some excercise you can become a expert!"} 
else if  (endScore<4){feedback.innerText="This is a good beginning...keep on practicing."} 
else if  (endScore<5){feedback.innerText="You are on the right pad... with some excercise you will become a true biologist."} 
else if  (endScore<6){feedback.innerText="Great work!"} 
else if  (endScore<7){feedback.innerText="Very good!"} 
else if  (endScore<8){feedback.innerText="You did a great job!"} 
else if  (endScore<9){feedback.innerText="Wow... amazing! Almost Perfect!"} 
else if  (endScore<10){feedback.innerText="Wow...perfect!...You are a true biologist!"} 
else{}
}

//quiz Questions
const questions = [{
    question: 'What is this animal?',
    img: "url('assets/images/wolf.jpg')",
    answers: [{
        text: 'Wolf',
        correct: true
      },
      {
        text: 'Sheep',
        correct: false
      },
      {
        text: 'Pig',
        correct: false
      },
      {
        text: 'Cow',
        correct: false
      }
    ],
  },
  {
    question: 'What is this animal?',
    img: "url('assets/images/panda_bear.jpg')",
    answers: [{
        text: 'Rabbit',
        correct: false
      },
      {
        text: 'Dog',
        correct: false
      },
      {
        text: 'Panda Bear',
        correct: true
      },
      {
        text: 'Dinosaur',
        correct: false
      }
    ]
  },
  {
    question: 'What is this animal?',
    img: "url('assets/images/rabbit.jpg')",
    answers: [{
        text: 'Cat',
        correct: false
      },
      {
        text: 'Rabbit',
        correct: true
      },
      {
        text: 'Fish',
        correct: false
      },
      {
        text: 'Ox',
        correct: false
      }
    ]
  },
  {
    question: 'What is this animal?',
    img: "url('assets/images/wolf.jpg')",
    answers: [{
        text: '6',
        correct: false
      },
      {
        text: '8',
        correct: true
      }
    ]
  }
]