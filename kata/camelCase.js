let repeatNumbers = function(data){
  var result=[];
  data.forEach(element => {result.push(repeatResult(element[0],element[1]))   
  });
  return result;
}
function repeatResult(num,times){
  var result = "";
  while (times>0){
    result += num.toString();
    times--;
}
return ParseInt(result);
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));