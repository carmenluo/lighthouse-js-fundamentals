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
  var board = emptyBoard(8);
  board[whiteQueen[0]][whiteQueen[1]]=1;
  board[blackQueen[0]][blackQueen[1]]=1;
  return board;
}
function queenThreat(board){
  var indecies=[];
  var num = board.length;
  for (var i = 0 ;i < num; i++){
    for (var j = 0 ; j < board[i].length; j++){
      if (board[i][j] === 1){
        indecies.push([i, j]);
      }
    }
  }
  var whiteQueen = indecies[0];
  var blackQueen = indecies[1];
  var difference = Math.abs(whiteQueen[0] - blackQueen[1]) - Math.abs(whiteQueen[1] - blackQueen[0]);
  //at same row or same column
  if (whiteQueen[0] == blackQueen [0] || whiteQueen[1] == blackQueen [1]){
    return true;
  }
  //check for diagonal
  else if (difference === 0){
    return true;
  }
  else return false;
}

let whiteQueen = [0, 0];
let blackQueen = [7, 7];
let generateBoard = generatedBoard(whiteQueen, blackQueen);
console.log(generateBoard);
console.log(queenThreat(generateBoard));