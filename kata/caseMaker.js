const makeCase = function (input, cases) {
  // Put your solution here
  var priorityIndex='';
  var priority = [{'camel': 1}, 
  {'pascal': 2},
  {'snake' :3},
  {'kebab': 4},
  {'title':5}];
  if (cases.length > 1){
  cases.forEach(element =>  {return priority[priorityIndex] > priority[element] && priority.keys().includes(element) ? priorityIndex = element : void 0   
  });
}
switchFunction(priorityIndex);
}
function switchFunction(caseEle){
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