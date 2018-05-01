"use strict";

function selectionSort(arr) {
  var minIndex;
  for (var i = 0; i < arr.length; i++) {
    minIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minIndex]) {
        minIndex = j;
      }
    }
    var tempMin;
    tempMin = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tempMin;
  }
  return arr;
}

selectionSort([3, 1, 45, 6, 2, 90]);
