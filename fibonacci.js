function sumFibs(num) {
  var a = 1;
  var b = 1;
  for (var i = 3; i <= num; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

sumFibs(7);
