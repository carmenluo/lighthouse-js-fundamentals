const squareCode = function(message) {
  // Put your solution here
  var numOfChars =  message.length;
  message = message.replace(/ /g, "");
  var output= [];
  var row = Math.ceil(Math.sqrt(numOfChars));
  for (var i = 0; i < Math.ceil(numOfChars / row) - 1; i++){
    output.push(message.substring(i  *row, (i + 1) * row));
  }
  if (message.length > ( Math.ceil(numOfChars / row)- 1) * row ){
    output.push(message.substring((Math.ceil(numOfChars / row)- 1) * row - 1, message.length));
  }
  return output.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));