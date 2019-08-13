const urlDecode = function(text) {
  // Put your solution here
  var textArray = text.split('&');
  var jsObject = [];
  for (var i = 0; i<textArray.length; i++){
    var tempArray = textArray[i].split('=');
    jsObject[tempArray[0]] = tempArray[1].replace(/\%20/g,' ');
  }
  return jsObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);