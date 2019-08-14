var guesser = prompt("Number to be guessed!!");
var answer;
var guessedNum = [];
var attempts=0;
var range = [-999, 999];
const getInputs = function(){
  answer = prompt("Guess a number: ");
  if (answer === null){
    return;
  }
  if (isNaN(answer)){
    console.log("Not a number! Try again");
    getInputs();
  }
  prompt("Guess from " + range[0]+ " to "+ range[1]+" Let starts!");
  attempts ++;
  if (checkAnswer(guesser, answer)){
    console.log("You got it! You took "+ attempts + " attempts");
  }
  else {
    getInputs();
  }
}

function checkAnswer(guesser, answer){
  //Compare is the answer exist before
  var existsOrNot = false;
  for (var i = 0; i<guessedNum.length; i++){
    if (answer == guessedNum[i]){
      existsOrNot = true;
  }
  }
  if (existsOrNot == true){
    console.log("Already Guessed!");
    attempts --;
    return false;
  }
  guessedNum.push(answer);
  if (guesser == answer){
    return true;
  }
  else {
    if (answer > guesser){
      range[1] =  answer;
      console.log("Too High!");
    }
    else {
      range[0] = answer;
      console.log("Too Low!");}
    return false;
  }
}
getInputs();
