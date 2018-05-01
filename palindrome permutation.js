function palindromePermutation(str) {
  var chars = {};

  for (var i = 0; i < str.length; i++) {
    if (chars[str.charAt(i)] === undefined) {
      chars[str.charAt(i)] = 1;
    } else {
      chars[str.charAt(i)] += 1;
    }
  }

  var count = 0;
  for (var key in chars) {
    if (chars[key] % 2 > 0) {
      count++;
    }
  }

  if (count > 1) {
    return false;
  }
  return true;
}

palindromePermutation("maamoo");
