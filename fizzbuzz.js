function fizzbuzz(n) {
  var results = [];
  for (var i = 1; i <= n; i++) {
    var entry = "";
    if (i % 3 === 0) {
      entry += "Fizz";
    }
    if (i % 5 === 0) {
      entry += "Buzz";
    }
    if (!entry) {
      entry += i;
    }
    results.push(entry);
  }
  return results;
}

fizzbuzz(100);
