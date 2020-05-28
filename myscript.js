const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submitButton');
const myQuestions = [

    {
      question: "what's the big sphere called?",
      answers: {
        a:"the orb",
        b:"the walker",
        c:"the traveler"
      },
      correctAnswer: "c"
    },
    {
      question: "the Fallen are accually called?",
      answers: {
        a: "Elinski",
        b: "The Jhons",
        c: "Hul'ud"
      },
      correctAnswer: "a"
    },

]


function buildQuiz() {
// html output
  const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
        //answer storage
        const answers = [];

        //for each answer
        for(letter in currentQuestion.answers){

        //add a html radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
          );
        }

        //add this question and its answers to the output
        output.push(
           `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    //finally combine the output list into a string of html and put it on the page
    quizContainer.innerHTML = output.join('');
}

// display quiz
buildQuiz();

myQuestions.forEach((currentQuestion, questionNumber) => {
  // we'll want to store the list of answer choices
const answers = [];

// and for each available answer...
for(letter in currentQuestion.answers){

  // ...add an html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

// add this question and its answers to the output
output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);
});



function showResults() {



// on submit display results
submitButton.addEventListner('click', showResults);

}



var output = []

myQuestions.forEach( (currentQuestion, questionNumber) => {

const answers = [];

for(letter in currentQuestion.answers){
  answers.push(
    `<label>
    <input type="radio" name="questions${questionNumber}" value="${letter}">
    ${letter} :
    ${currentQuestion.answers[letter]}
    </label>`
  );
}

output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </dive>`
);

quizContainer.innerHTML = output.join('');
});
