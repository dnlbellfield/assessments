function product2 (x) {

  for (var i = x; i > 0; i--) {
    if (factorialize(i) == x) {
      console.log('match. n! = x. x is = ', x);
    }
  } 
}

function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}