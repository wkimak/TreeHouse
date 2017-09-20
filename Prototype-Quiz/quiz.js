
//Question constructor
function Question(question, choices, answer){
 this.question = question;
 this.choices = choices;
 this.answer = answer;
}

//Quiz constructor
function Quiz(questions){
  this.currentQuestion = 0;
  this.score = 0;
  this.questions = questions;
}

//Quiz prototypes
Quiz.prototype.getCurrentQuestion = function(){
 return this.questions[this.currentQuestion]; 
}

Quiz.prototype.hasEnded = function(){
   return this.currentQuestion >= this.questions.length; 
}


//User Interface

// variable declarations
var h2 = document.getElementById("question");
var choice1 = document.getElementById("choice0");
var choice2 = document.getElementById("choice1");
var progress = document.getElementById("progress");
var div = document.getElementById("quiz");

 
//question instances
var question1 = new Question("How many states are in the United States?", [48, 50],50);
var question2 = new Question("What is the Capital of New York?", ["Albany", "Manhattan"],"Albany");
var question3 = new Question("Who is the president of the United States?", ["Donald Trump", "Barak Obama"], "Donald Trump");
var question4 = new Question("What year was the first 'It' Movie released?",[1990,1985],1990);
var question5 = new Question("What is Elsa Kimak's Birthday?",["May 26th","September 10th"],"September 10th");

//array of choices
var getChoices = [question1.choices, question2.choices, question3.choices, question4.choices, question5.choices];

//array of answer
var getAnswers = [question1.answer, question2.answer, question3.answer, question4.answer, question5.answer];

//quiz instance
var quiz = new Quiz([question1.question,question2.question,question3.question,question4.question,question5.question]);


// initial text setup 
h2.textContent = quiz.getCurrentQuestion();
choice1.textContent = getChoices[0][0];
choice2.textContent = getChoices[0][1];
progress.textContent = "Question " + (quiz.currentQuestion + 1) + " of " + quiz.questions.length;

//event listener
div.addEventListener("click", function(event){
  if(event.target.tagName == "BUTTON"){
     //test whether answer is correct
      if(event.target.previousElementSibling.textContent == getAnswers[quiz.currentQuestion]){
      quiz.score++; 
      }//score keeper conditional
    quiz.currentQuestion++;
    if(quiz.currentQuestion < quiz.questions.length){
    h2.textContent = quiz.getCurrentQuestion();
    choice1.textContent = getChoices[quiz.currentQuestion][0];
    choice2.textContent = getChoices[quiz.currentQuestion][1];
    progress.textContent = "Question " + (quiz.currentQuestion + 1) + " of " + quiz.questions.length; 
  // When quiz has ended
    }else if(quiz.hasEnded()){
      div.innerHTML = "<h1> Game Over </h1> <br> <h3> You got " + quiz.score + " questions correct! </h3>";
      var startOver = document.createElement("button");
      startOver.textContent = "Start Over";
      startOver.className = "btn--default";
      div.appendChild(startOver);
      //start over btn event listener
      startOver.addEventListener("click", function(){
  location.reload();
}); // start over btn event listener
     }// hasEnded conditional
  }// event target conditional
}); //main event listener
