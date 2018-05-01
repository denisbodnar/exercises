"use strict";

function sumPrimes(num) {
  var sum = 0;
  for (var i = 2; i <= num; i++) {
    var count = 0;
    for (var j = 2; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count == 1) {
      sum += i;
    }
  }

  return sum;
}

sumPrimes(977);
