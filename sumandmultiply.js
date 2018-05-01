//using anonymous function//
function sum(arr) {
  var total = null;
  arr.forEach(function(i) {
    return (total += i);
  });
  return total;
}

function multiply(arr) {
  var multiplied = 1;
  function multiplicator(item) {
    multiplied *= item;
  }
  arr.forEach(multiplicator);
  return multiplied;
}

arry = [1, 2, 3, 4];

console.log(sum(arry));
console.log(multiply(arry));
