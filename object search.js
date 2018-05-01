function whatIsInAName(collection, source) {
  var arr = [];
  var src = Object.keys(source);
  arr = collection.filter(function(obj) {
    for (var i = 0; i < src.length; i++) {
      if (!obj.hasOwnProperty(src[i]) || obj[src[i]] !== source[src[i]]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

whatIsInAName([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], { a: 1, c: 2 });
Í;
