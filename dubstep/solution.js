function songDecoder(song){
  var result_one = song.replace(/(WU+B)/g, ' ');
  var result_two = result_one.replace( / {2,}/g, ' ');
  var trim_front = result_two.replace( /^\s\s*/g, '');
  var trim_back  = trim_front.replace( /\s\s*$/g, '');
  return trim_back;
}
