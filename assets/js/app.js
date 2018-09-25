var myQuestions = [
    {
      question: "1) What is the minimum in cards allowed in a deck?",
      answers: {
        a: "30",
        b: "40",
        c: "50"
      },
      correctAnswer: "b"
    },
    {
        question: "2) If a monster card is blue, what type of monster is it?",
        answers: {
          a: "Fusion Monster",
          b: "Synchro Monster",
          c: "Ritual Monster",
          d: "Effect Monster"
        },
        correctAnswer: "c"
      },
      {
        question: "3) You can activate a normal trap card immediately from your hand, True or False?",
        answers: {
          a: "true",
          b: "false"
          
        },
        correctAnswer: "b"
      }
    ];
// const is different from a avr in the sense that it cannot be reused, it's pretty much stands for contsant i would assume
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit"); 
     
var buildquiz = function(){
  //this is to store our HTML output
  var output = [];
  
  //using a .foreach loop and the => to perfomr the operation on each question
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      // an array to store our the answers we choose
      var answers = [];

      //for each available answer we'll do the folowing
      for(letter in currentQuestion.answers){
      // making "radio" buttons, those are buttons that will let you select your answers for the questions.
      answers.push(
      // creating the selection buttons in our html through a label tag
        `<label>

        <input type="radio" name="question${questionNumber}" value="${letter}">
        ${letter} :
        ${currentQuestion.answers[letter]}

      </label>`
      );
      }
       // adding the questions and its answers to the output
       out.push(
         //creating div tags with js inside to display the question and answers.
         `<div class="question"> ${currentQuestion.question} </div>

         <div class ="answers"> ${answers.join("")} </div>`
       );
    }
  );
  // finally combine our output list into one string of html and put it onto our page
  quizContainer.innerHTML = output.join("")
}
// the point of this function is to find the selected answer in the html and handle what happens if its correct or wrong
var showResults = function(){
  // gather your answers containers from your quiz
  var answerContainers = 
  quizContainer.querySelectorAll(".answers");

  //keeping track of user's answers
  var numCorrect = 0;

  //using the .foreach loop
  myQuestions.forEach((currentQuestion, questionNumber)
=> {
  //look for selected answer
  var answerContainer =

  answerContainers[questionNumber];

  var selector =
  `input[name=question${questionNumber}]:checked`;

  var userAnswer =
  // either get the value of the selected answer or place an empty object if nothing is selected to create an undefined
  (answerContainer.querySelector(selector) || {}).value;

  //if answer is correct
  if(userAnswer === currentQuestion.correctAnswer){
    //add to the number of correct answers
    numCorrect++;
    // color answers green
    answerContainers[questionNumber].style.color = "lightgreen";
  }
  else{
    answerContainers[questionNumber].style.color = "red";
  }
}
);
//display number of correct answers out of total
resultsContainer.innerHTML = numCorrect + " out of " +
myQuestions.length;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
