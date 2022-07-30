const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const image = document.getElementById("image");

image.classList.add('img')
image.style.backgroundImage="url('assets/images/wolf.jpg')"

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question;
    image.style.backgroundImage=question.img
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is this animal?',
    img:  "url('assets/images/wolf.jpg')",
    answers: [
      { text: 'Wolf', correct: true },
      { text: 'Sheep', correct: false },
      { text: 'Pig', correct: false },
      { text: 'Cow', correct: false }
    ], 
  },
  {
    question: 'What is this animal?',
    img:  "url('assets/images/panda_bear.jpg')",
    answers: [
      { text: 'Rabbit', correct: false },
      { text: 'Dog', correct: false },
      { text: 'Panda Bear', correct: true },
      { text: 'Dinosaur', correct: false }
    ]
  },
  {
    question: 'What is this animal?',
    img:  "url('assets/images/rabbit.jpg')",
    answers: [
      { text: 'Cat', correct: false },
      { text: 'Rabbit', correct: true },
      { text: 'Fish', correct: false },
      { text: 'Ox', correct: false }
    ]
  },
  {
    question: 'What is this animal?',
    img:  "url('assets/images/wolf.jpg')",
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]