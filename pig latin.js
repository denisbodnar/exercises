function translatePigLatin(str) {
  var translated = "";
  var regex = /[aouie]/g;

  var vowelIndex = str.indexOf(str.match(regex)[0]);

  if (vowelIndex == 0) {
    translated = str + "way";
  } else {
    translated = str.substr(vowelIndex) + str.substr(0, vowelIndex) + "ay";
  }
  return translated;
}

translatePigLatin("algorithm");
