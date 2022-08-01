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
  document.getElementById("score-number").innerText = 0;
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
else if  (endScore<=2){feedback.innerText="Keep on Learning."} 
else if  (endScore=3){feedback.innerText="With some excercise you can become a expert!"} 
else if  (endScore=4){feedback.innerText="This is a good beginning...keep on practicing."} 
else if  (endScore=5){feedback.innerText="You are on the right pad... with some excercise you will become a true biologist."} 
else if  (endScore=6){feedback.innerText="Great work!"} 
else if  (endScore=7){feedback.innerText="Very good!"} 
else if  (endScore=8){feedback.innerText="You did a great job!"} 
else if  (endScore=9){feedback.innerText="Wow... amazing! Almost Perfect!"} 
else if  (endScore=10){feedback.innerText="Wow...perfect!...You are a true biologist!"} 
else{}
}

//quiz Questions
const questions = [
  {
    question: 'Which animal is this?',
    img: "url('assets/images/fox.jpg')",
    answers: [{
        text: 'Arctic rabbit',
        correct: false
      },
      {
        text: 'Artic dog',
        correct: false
      },
      {
        text: 'Arctic fox',
        correct: true
      },
      {
        text: 'Arctic rat',
        correct: false
      }
    ]},
  {
    question: 'Which animal is this?',
    img: "url('assets/images/polarbear.jpg')",
    answers: [{
        text: 'Husky',
        correct: false
      },
      {
        text: 'Polar bear',
        correct: true
      },
      {
        text: 'Grizzly bear',
        correct: false
      },
      {
        text: 'Panda bear',
        correct: false
      }
    ]},
  {
    question: 'Which animal is this?',
    img: "url('assets/images/reindeer.jpg')",
    answers: [{
        text: 'Moose',
        correct: false
      },
      {
        text: 'Reindeer',
        correct: true
      }, 
      {
        text: 'Dog',
        correct: false
      },
      {
        text: 'Deer',
        correct: false
      }
    ]},
    {question: 'Which animal is this?',
    img: "url('assets/images/penguin.jpg')",
    answers: [{
        text: 'Flamingo',
        correct: false
      },
      {
        text: 'Duck',
        correct: false
      },
      {
        text: 'Owl',
        correct: false
      },
      {
        text: 'Penguin',
        correct: true
      }
    ]}, 
    {question: 'Penguins live only on the north pole?',
    img: "url('assets/images/penguin2.jpg')",
    answers: [{
        text: 'True, they live on the north pole.',
        correct: false
      },
      {
        text: 'False, they live on the south pole.',
        correct: true
      }
    ]},
    {
      question: 'Are polar bears friendly animals.',
      img:  "url('assets/images/polarbearbaby.jpg')",
    answers: [{
        text: 'Yes, they are friendly.',
        correct: false
      },
      {
        text: 'No, they are dangerous.',
        correct: true
      }
    ]
  },
    {question: 'What does arctic mean?',
    img: "",
    answers: [{
        text: 'The polar region on earth',
        correct: true
      },
      {
        text: 'The artic animals',
        correct: false
      }, 
      {
        text: 'A lot of snow',
        correct: false
      }
    ]},
    
    {question: 'Which famous person lives on the north pole? ',
    img: "url('assets/images/christmas.jpg')",
    answers: [{
        text: 'Lady gaga',
        correct: false
      },
      {
        text: 'The lion king',
        correct: false
      }, 
      {
        text: 'Santa Claus',
        correct: true
      }
    ]},
    
    {question: 'What was the coldest tempurature ever on earth? ',
    img: "",
    answers: [{
        text: '-47.7°C ',
        correct: false
      },
      {
        text: '-89.2°C',
        correct: true
      }, 
      {
        text: '-67,9',
        correct: false
      }
    ]},
    {question: 'Are reindeer friendly? ',
    img: "",
    answers: [{
        text: 'no, they are agressive.',
        correct: false
      },
      {
        text: 'yes, they are friendly.',
        correct: true
      }
    ]}
]