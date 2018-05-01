function findLongestWord(words) {
  var longest = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return (
    "The longest word is " +
    longest +
    ", contains " +
    longest.length +
    " letters"
  );
}

var arr = ["ello", "hteranosaurus", "ololololo"];
console.log(findLongestWord(arr));
