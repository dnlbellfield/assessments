function isValid(string) {
  var reverse = '';
  for (var i = string.length -1 ; i > -1; i--) {
    reverse += string[i];
  }
  return (string === reverse);
}


// strategy: take the string, reverse string, compare  to the original 
