function dropElements(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      arr.shift(arr[i]);
      i--;
    } else {
      break;
    }
  }
  return arr;
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
