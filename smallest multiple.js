function smallestCommons(arr) {
  var numbers = [];

  for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++) {
    numbers.push(i);
  }

  function greaterCommonDivisor(a, b) {
    var temp;
    while (b != 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  function leastCommonMultiple(a, b) {
    return a * b / greaterCommonDivisor(a, b);
  }

  arr = numbers.reduce(leastCommonMultiple);

  return arr;
}

smallestCommons([1, 5]);
