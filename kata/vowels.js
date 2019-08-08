let numberOfVowels = function(data){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return data.split("").filter(element => vowels.includes(element)).length;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));