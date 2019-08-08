/*const conditionalSum = function(values, condition){
  var result=0;
  if (condition == "even"){
    values.forEach(element => {element % 2 === 0 ? result +=element : 0      
    });
    return result;
  }
  else if (condition == "odd"){
    values.forEach(element => {element % 2 ===1 ? result +=element : 0
    });
    return result;
  }
  else return undefined;
}*/
const conditionalSum = function(values, condition){
  if (condition == "even"){
    return values.filter(value => value % 2 == 0).reduce((a, b) => a + b , 0);
  }
  else if (condition === "odd"){
    return values.filter(value => value % 2 ===1).reduce((a, b)=> a + b , 0);
  }
  else return undefined;

}
console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));