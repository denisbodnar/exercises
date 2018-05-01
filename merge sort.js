function merge(arr, start, medium, end) {
  var n1 = medium - start + 1;
  var n2 = end - medium;
  var left = [];
  var right = [];

  for (var i = 0; i < n1; i++) {
    left[i] = arr[i];
  }

  for (var j = 0; j < n2; j++) {
    right[j] = arr[j];
  }

  left[n1 + 1] = Infinity;
  right[n2 + 1] = Infinity;

  i = 0;
  j = 0;

  for (var k = start; k <= end; k++) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
  }

  return arr;
}

function mergeSort(arr, start, end) {
  if (start < end) {
    var medium = Math.ceil((end - start) / 2);
    mergeSort(arr, start, medium);
    mergeSort(arr, medium + 1, end);
    merge(arr, start, medium, end);
  }
  return arr;
}

var arry = [56, 67, 2, 3, 1, 578, 9];

mergeSort(arry, 0, 7);
