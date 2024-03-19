// List of questions (statement + answer)
const questions = [
  {
    statement: "Question 1: 2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "Question 2: In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement: 
      "Question 3: What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];


// Function to generate HTML for each question
function generateQuestionHTML(question) {
  const questionDiv = document.createElement('div');
  questionDiv.classList.add('question');

  const statementPara = document.createElement('p');
  statementPara.textContent = question.statement;
  questionDiv.appendChild(statementPara);

  const showAnswerButton = document.createElement('button');
  showAnswerButton.textContent = 'Show the answer';
  showAnswerButton.addEventListener('click', function () {
    showAnswer(questionDiv, question.answer);
  });
  questionDiv.appendChild(showAnswerButton);

  return questionDiv;
}

// Function to show the answer for a question
function showAnswer(questionDiv, answer) {
  const answerPara = document.createElement('p');
  answerPara.textContent = answer;
  questionDiv.removeChild(questionDiv.lastChild); // Remove the button
  questionDiv.appendChild(answerPara); // Add the answer
}

// Function to initialize the quiz
function initializeQuiz() {
  const contentDiv = document.getElementById('content');
  questions.forEach(function (question) {
    const questionHTML = generateQuestionHTML(question);
    contentDiv.appendChild(questionHTML);
  });
}

// Initialize the quiz
initializeQuiz();