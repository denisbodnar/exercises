function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2).filter(function(val) {
    return arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1;
  });
  return newArr;
}

diffArray([1, 2, 3, 8, 5, "hello"], [1, 11, 2, 3, 4, 5]);
