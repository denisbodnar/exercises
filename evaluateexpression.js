/*Write a function named evaluateExpression(), that takes three arguments: two
operands and an operator, and returns the number that results from applying the
operator to the operands. For example: evaluateExpression(5, 7, ‘+’).*/

function evaluateExpression(x, y, operator) {
  var result = null;
  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
  }
  console.log(result);
}
