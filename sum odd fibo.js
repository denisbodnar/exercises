function sumFibs(num) {
  var a = 0;
  var sum = 0;
  for (var b = 1; b <= num; b = c) {
    var c = a + b;
    a = b;
    if (b % 2 !== 0) {
      sum += b;
    }
  }
  return sum;
}

sumFibs(1000);
