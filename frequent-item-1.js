// Write a JavaScript program to find the most frequent item of an
// array.Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5
// times ).

function frequentItem(array) {
  var freq = null;
  var quant = 0;
  var repeats = 0;
  for (var i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; i++) {
      if (array[i] == array[j]) {
        repeats += 1;
      }
    }
    if (repeats > quant) {
      freq = array[i];
      quant = repeats;
    }
    repeats = 0;
  }
  return freq + " ( " + quant + " times" + " )";
}

var arr1 = [
  3,
  "a",
  2,
  "a",
  "a",
  2,
  3,
  "a",
  3,
  "a",
  2,
  2,
  4,
  9,
  2,
  3,
  2,
  3,
  "b"
];

console.log(frequentItem(arr1));
