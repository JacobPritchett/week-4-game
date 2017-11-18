// Run code when page loads.
window.onload = function() {
	// Define click events.
	$("#red").click(crystalPress.red);
	$("#green").click(crystalPress.green);
	$("#yellow").click(crystalPress.yellow);
	$("#blue").click(crystalPress.blue);
};

// Hold wins and losses.
var wins;

var losses;

// Hold score.
var score;


var crystalRed = Math.floor(Math.random() * 12 + 1);
var crystalGreen = Math.floor(Math.random() * 12 + 1);
var crystalYellow = Math.floor(Math.random() * 12 + 1);
var crystalBlue = Math.floor(Math.random() * 12 + 1);


console.log(crystalRed);