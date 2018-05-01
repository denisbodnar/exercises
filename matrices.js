function matrice(cols, rows) {
  var arr = [];
  for (var i = 0; i < cols; i++) {
    var subarr = [];
    for (var j = 0; j < rows; j++) {
      if (i > j) {
        subarr.push(2);
      } else if (i < j) {
        subarr.push(3);
      } else {
        subarr.push(1);
      }
    }
    arr.push(subarr);
  }
  return arr;
}

function numberMatrix(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      document.write(array[i][j] + " ");
    }
    document.write("<br>");
  }
}

numberMatrix(matrice(5, 5));
