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
        b: "",
        c: ""
      },
      correctAnswer: "a"
    },



]


function buildQuiz() {}

function showResults() {}

// display quiz
buildQuiz();

// on submit display results
submitButton.addEventListner('click', showResults);
