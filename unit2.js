var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2){
    if (userChoice === computerChoice) {
        return "The result is a tie!";
}
    if(userChoice === "scissors"){
    if(computerChoice === "rock"){
        return "rock wins";
}   else {
        return "scissors wins";
        }
    }
}; 