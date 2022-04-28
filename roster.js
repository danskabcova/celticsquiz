const questions = [
    ["q0", "Larry Bird"],
    ["q1", "Kevin McHale"],
    ["q2", "Dennis Johnson"],
    ["q3", "Danny Ainge"],
    ["q4", "Robert Parish"]
];

function guess1() {
	var img = document.createElement("img");
    img.src = "bird.jpg";
    img.setAttribute("display", "block");
	
	var element = document.getElementById("33");
	element.innerHTML = gameOverHTML;

	var userInputName = document.querySelector('#q1').value;

	if (userInputName == questions[0][1]){
		gameOverHTML += "<img class='gameOver' src='bird.jpg'/>";
		element.innerHTML = gameOverHTML;
	} else {
			console.log('The age of  is:', questions[0][2]); 
	}
}