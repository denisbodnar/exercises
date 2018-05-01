// Write a JavaScript program to find the most frequent item of an
// array.Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5
// times ).

function frequentItem(array) {
  var frequent = null;
  var quantity = null;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == frequent || frequent == null) {
      frequent = array[i];
      quantity++;
    }
  }
  console.log(frequent + ", (" + quantity + " times)");
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

frequentItem(arr1);
