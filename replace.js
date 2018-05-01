function myReplace(str, before, after) {
  var words = str.split(" ");
  if (before[0].toUpperCase() === before[0]) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  words.splice(words.indexOf(before), 1, after);
  str = words.join(" ");
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
