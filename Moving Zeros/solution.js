var moveZeros = function (arr) {
  var result = [];
  var zero_index = [];
  arr.map(function(x,y){
        if (x === 0){
            zero_index.push(y);
        } else {
            result.push(x);
        }
  
  });
  
  for (let i = 0; i < zero_index.length; i++){
    result.push(0);
  }
  
  return result;
}