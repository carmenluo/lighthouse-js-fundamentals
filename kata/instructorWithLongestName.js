/*const instructorWithLongestName = function(instructors){
  instructors.sort((a, b) => b.name.length -  a.name.length);
  return instructors[0];
};*/
const instructorWithLongestName = function(instructors){
  var result="";
  instructors.forEach(element => {result.length > element.name.length ?  result = result : result = element.name
    
  });
  return result;

};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "ios"},
  {name:"Jermiah", course: "Web"},
{name:"Pohilia", course: "Web"},
{name:"Donald", course: "Web"},
{name:"Matthew", course: "Web"},
{name:"David", course: "ios"},
  {name:"Domascus", course: "Web"},
]))