let calculateChange = function(total, cash) {
  // Your code here
   var change = [
    {name:"Twenty Dollars", value : 2000, number : 0},
    {name:"Ten Dollars", value :1000, number: 0},
    {name:"Five Dollars", value: 500, number: 0},
    {name:"Two Dollars", value :200, number :0},
    {name:"One Dollar", value : 100, number : 0},
    {name:"Quarter", value : 25, number : 0},
    {name:"Dime", value : 10, number :0},
    {name:"Nickel", value : 5, number: 0},
    {name:"Penny", value : 1, number :0}    
  ];
  var result = {};
  let remain=cash-total;
    for (var i = 0; i < change.length; i ++){
      if (change[i].value <= remain){
          change[i].number = Math.floor((remain / change[i].value));
        remain = remain % change[i].value;
        result[change[i].name] = change[i].number;
      }

      
    }
    return result;
  }
  
  
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));