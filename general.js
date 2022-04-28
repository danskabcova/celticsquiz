function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>FINAL SCORE</h1>";
    gameOverHTML += "<h2 id='score'> You: " + quiz.score + " Quiz: " + quiz.questions.length + " </h2>";
	
	
    var img = document.createElement("img");
    img.src = "lebrick.jpg";
    img.setAttribute("display", "block");

    var div = document.getElementById("quiz");
    div.appendChild(img);
    div.setAttribute("style", "text-align:center");

	if (quiz.score <= (quiz.questions.length * 0.25)) {
		gameOverHTML += "<h2 id='score'> LEBRICK </h2>";
		gameOverHTML += "<img class='gameOver' src='lebrick.jpg'/>";
	} else if (quiz.score > (quiz.questions.length * 0.25) && quiz.score <= (quiz.questions.length * 0.50)) {
		gameOverHTML += "<h2 id='score'> You're G-league at best kid </h2> ";
		gameOverHTML += "<img class='gameOver' src='maine.png'/>";
	} else if (quiz.score > (quiz.questions.length * 0.50) && quiz.score <= (quiz.questions.length * 0.75)){
		gameOverHTML += "<h2 id='score'> Starting 5 you earned it chief</h2>";
		gameOverHTML += "<img class='gameOver' src='squad.jpg'/>";
	} else if (quiz.score > (quiz.questions.length * 0.75)) {
		gameOverHTML += "<h2 id='score'> You are GOATed </h2>";
		gameOverHTML += "<img class='gameOver' src='goated.jpg'/>";
	} else {
		gameOverHTML += "<h2 id='score'> did u even do the quiz? </h2>";
	}
	
    var element = document.getElementById("quiz");
	element.innerHTML = gameOverHTML;
};
 
// create questions here
const questions = [
    new Question("How many players have achieved 2000+ points in a season?", ["3", "7","11", "6"], "7"),
    new Question("How many players did not play for another franchise?", ["5", "3", "6", "2"], "6"),
    new Question("Which Celtics player has scored the most points before turning 24?", ["Antonine Walker", "Paul Pierce","Bill Russell", "Jayson Tatum"], "Jayson Tatum"),
    new Question("How many wins does Boston Celtics have in total history (Highest in the NBA as on March 2022)", ["4012~", "3256~", "3513~", "2669~"], "3513~"),
    new Question("How many championships were won by Boston Celtics “Big Three”?", ["2", "4", "3", "6"], "3"),
	new Question("What is the name of Celtics mascot?", ["Big stuff", "Clover", "Lucky", "Greenie"], "Lucky"),
	new Question("Celtics have had 4, 48-point+ wins before 2022. How many have they had this year?", ["3", "0", "2", "1"], "2"),
    new Question("Who scored the final layup off a steal in the 1984 championship of Celtics vs Lakers, securing the game for Boston?", ["Larry Bird", "D.J.", "Kevin Garnett", "Kevin McHale"], "D.J.")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();