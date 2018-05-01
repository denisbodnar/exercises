function isUnique(str) {
  var chars = {};

  for (var i = 0; i < str.length; i++) {
    if (chars[str.charAt(i)] === undefined) {
      chars[str.charAt(i)] = true;
    } else {
      return false;
    }
  }

  return true;
}

isUnique("arc");
