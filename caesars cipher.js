function caesars(str) {
  var decode="";
  for (var i=0; i<str.length; i++) {
    if (str.charCodeAt(i)>=78 && str.charCodeAt(i)<=90) {
      decode+=String.fromCharCode(str.charCodeAt(i)-13);
    } else if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=78) {
      decode+=String.fromCharCode(str.charCodeAt(i)+26-13);
    } else {
      decode+=str[i];
    }
  }
  return decode;
}

console.log(caesars("SERR PBQR PNZC"));
