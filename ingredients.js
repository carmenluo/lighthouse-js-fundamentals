const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let index = 0;
while (index < ingredients.length){
  console.log(ingredients[index]);
  index++;
}
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i< ingredients.length; i++){
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var j = ingredients.length - 1; j >= 0; j--){
  console.log(ingredients[j]);
}