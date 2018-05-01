/*Create an expression using both Math.random and Math.floor to generate a
random integer between two variables, high and low, where high is greater than low.*/

var low = 14;
var high = 56;

var randomInteger = Math.floor(Math.random() * (high - low)) + low;

console.log(randomInteger);
