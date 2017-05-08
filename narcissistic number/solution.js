function narcissistic( value ) {
  var arr = value.toString().split("")
            .map(function(t){
              return parseInt(t)
            });
  var arrLen = arr.length;
  var sum = 0;
  for ( let i = 0; i < arrLen; i++){
    sum += Math.pow(arr[i], arrLen);
  }
  
  if(sum === value) {
    return true;
  } else {
    return false;
  }
}
