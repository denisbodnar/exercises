function isUnique(str) {
  for (var i = 0; i < str.length; i++) {
    var count = 0;
    for (var j = 0; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) {
        count++;
      }
      if (count > 1) {
        return false;
        break;
      }
    }
  }
  return true;
}

isUnique("auvhjukle");
