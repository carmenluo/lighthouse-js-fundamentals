function removeFromArray(arr, item){
  var index = arr.indexOf(item);
  if (index > -1){
    arr.splice(index, 1);
  }
  return arr;
}
function getPriority(priorities, input){
  var addValue = [];
  for (var i = 0;i < input.length; i++){
    priorities.forEach(element => element.name == input[i]? addValue.push(element) : void 0);
  }
  if (addValue.length > 0){
  addValue.sort((a,b) => (a.value - b.value));
  return addValue[0].name;}
  else return '';
}
const makeCase = function (input, cases) {
  // Put your solution here
  var caseArray=[];
   caseArray.push(cases);
 
  console.log(caseArray);
  var priorityFirst = [{name:'camel', value: 1}, 
  {name : 'pascal', value : 2},
  {name : 'snake', value : 3},
  {name : 'kebab', value : 4},
  {name : 'title', value : 5}];

  var prioritySecond = [{name:'vowels', value: 1}, 
  {name : 'consonant', value : 2}];

  var priorityThird = [{name:'upper', value: 1}, 
  {name : 'lower', value : 2}];



  input = switchFunction(input,getPriority(priorityThird, caseArray));
  input = switchFunction(input,getPriority(prioritySecond, caseArray));
  input = switchFunction(input,getPriority(priorityFirst, caseArray));
  return input;
}

function switchFunction(input,caseEle){

  switch (caseEle) {
    case "camel":
      return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, "");
    case "pascal":
      return input.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word) {
        return word.toUpperCase();
      }).replace(/\s+/g, "");
      break;
    case "snake":
      return input.replace(/[A-Z]/g, function (match) {
        return match.toLowerCase();
      }).replace(/\s+/g, "_");
    case "kebab":
      return input.replace(/[A-Z]/g, function (match) {
        return match.toLowerCase();
      }).replace(/\s+/g, "-");
      break;
    case "title":
        return input.replace(/\b\w/g, function (word) {
          return word.toUpperCase();
        });
        break;
    case "vowel":
        return input.replace(/[aeiou]/g, function (word) {
          return word.toUpperCase();
        });
      break;
    case "consonant":
        return input.replace(/[^aeiou]/g, function (word) {
          return word.toUpperCase();
        });
    case "upper":
        return input.toUpperCase();
      break;
    case "lower":
      return input.toLowerCase();
      break;
    default:
      return input;


  }
  return input;

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));