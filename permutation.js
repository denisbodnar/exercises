function isPermutation(s, x) {
  var chars = {};
  for (var i = 0; i < s.length; i++) {
    chars[s.charAt(i)] = true;
  }

  for (var j = 0; j < x.length; j++) {
    if (chars[x.charAt(j)] === undefined) {
      return false;
    }
  }

  return true;
}

isPermutation("cots", "scat");
