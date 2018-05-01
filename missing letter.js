function fearNotLetter(str) {
  var letters = str.split("");
  for (var i = 0; i < letters.length - 1; i++) {
    if (letters[i + 1] !== String.fromCharCode(letters[i].charCodeAt(0) + 1)) {
      return String.fromCharCode(letters[i].charCodeAt(0) + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");
