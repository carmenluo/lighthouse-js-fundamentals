const emptyBoard = function (num){
  var board=[];
  for (var j=0;j < num; j++){
  var oneArray = [];
  for (var i=0;i < num; i++){

    oneArray.push(0);
  }
  board.push(oneArray);
}
return board;
}
function generatedBoard(whiteQueen, blackQueen){
  var emptyBoard = emptyBoard(8);
  emptyBoard[whiteQueen[0]][whiteQueen[1]]=1;
  emptyBoard[blackQueen[0]][blackQueen[1]]=1;
}
function queenThreat(generatedBoard){
  
}
let whiteQueen = [0 , 5];
let blackQueen = [5, 0];
let generatedBoard = 
console.log(emptyBoard(8));