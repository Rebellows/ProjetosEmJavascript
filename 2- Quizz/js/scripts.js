const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

const questions = [
  {
    "question": "What's the name of the father of computing?",
    "answers": [
      {
        "answer": "Alan Turing",
        "correct": true
      },
      {
        "answer": "Martin Scorcese",
        "correct": false
      },
      {
        "answer": "Gabriel Medina",
        "correct": false
      },
      {
        "answer": "Fausto Silva",
        "correct": false
      },
    ]
  },
  {
    "question": "Who wrote the book David Copperfield?",
    "answers": [
      {
        "answer": "Johnnie Walker",
        "correct": false
      },
      {
        "answer": "Charles Dickens",
        "correct": true
      },
      {
        "answer": "Caetano Veloso",
        "correct": false
      },
      {
        "answer": "Gabriel Toledo",
        "correct": false
      },
    ]
  },
  {
    "question": "What are the three phases of cellular respiration?",
    "answers": [
      {
        "answer": "Protein Synthesis, Fermentation and Gluconeogenesis",
        "correct": false
      },
      {
        "answer": "Krebs Cycle, Calvin Cycle and Oxidative Phosphorylation",
        "correct": false
      },
      {
        "answer": "Glycolysis, Transcription and Oxidative Decarboxylation",
        "correct": false
      },
      {
        "answer": "Glycolysis, Krebs Cycle and Oxidative Phosphorylation",
        "correct": true
      },
    ]
  },
]

function init() {
  createQuestion(0);
}

function createQuestion(i) {
  const oldButtons = answersBox.querySelectorAll("button");
  oldButtons.forEach(function(btn) {
    btn.remove();
  });

  const questionText = question.querySelector("#question-text");
  const questionNumber = question.querySelector("#question-number");

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach(function(answer, i) {
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    answersBox.appendChild(answerTemplate);

    answerTemplate.addEventListener("click", function() {
      checkAnswer(this);
    });
  });

  actualQuestion++;
}

function checkAnswer(btn) {
  const buttons = answersBox.querySelectorAll("button");

  buttons.forEach(function(button) {
    if (button.getAttribute("correct-answer") === "true") {
      button.classList.add("correct-answer");

      if (btn === button) {
        points++;
      }
    }
    else {
      button.classList.add("wrong-answer");
    }
  });

  nextQuestion();
}

function nextQuestion() {
  setTimeout(function() {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 1500);
}

function showSuccessMessage() {
  hideOrShowQuizz();

  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector("#display-score");
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector("#correct-answers");
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector("#questions-qty");
  totalQuestions.textContent = questions.length;
}

function hideOrShowQuizz() {
  quizzContainer.classList.toggle("hide");
  scoreContainer.classList.toggle("hide");
}

const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function() {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

init();