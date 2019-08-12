const organizeInstructors = function(instructors){
  var result = {};
  for (var i = 0; i < instructors.length; i++){
    if (!Object.keys(result).includes(instructors[i].course.toUpperCase())){
      result[instructors[i].course.toUpperCase()]=[(instructors[i].name)];
    }
    else {
      result[instructors[i].course.toUpperCase()].push(instructors[i].name);
    }
  }
  return result;
};

console.log(organizeInstructors([{name: "Samuel", course : "IOS"},
{name: "Victoria", course :"Web"},
{name: "Karim", course: "Web"},
{name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
{name: "Brendan", course: "Blockchain"},
{name: "David", course : "Web"},
{name:"Martha", course: "Ios"},
{name:"Carlos", course: "Web"}
]));