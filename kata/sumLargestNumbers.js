let sumLargestNumbers = function(data){
  data.sort((a , b) => (b - a));
  return data[0] + data[1];
}
