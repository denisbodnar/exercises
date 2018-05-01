function convertToRoman(num) {
  var romans = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M"
  ];
  var decimals = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var romanized = "";
  for (var i = num; i >= 0; i--) {
    while (decimals[i] <= num) {
      romanized += romans[i];
      num -= decimals[i];
    }
  }
  return romanized;
}

convertToRoman(2017);
