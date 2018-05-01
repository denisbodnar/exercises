function convertHTML(str) {
  var chars = str.split("");
  for (var i = 0; i < chars.length; i++) {
    switch (chars[i]) {
      case "&":
        chars[i] = "&amp;";
        break;
      case '"':
        chars[i] = "&quot;";
        break;
      case "'":
        chars[i] = "&apos;";
        break;
      case "<":
        chars[i] = "&lt;";
        break;
      case ">":
        chars[i] = "&gt;";
        break;
    }
  }
  str = chars.join("");
  return str;
}

convertHTML("Dolce & Gabbana");
