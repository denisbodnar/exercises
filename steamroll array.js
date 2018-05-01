function steamrollArray(arr) {
  var rolled = [];

  function extractor(val) {
    if (!Array.isArray(val)) {
      rolled.push(val);
    } else {
      for (var i = 0; i < val.length; i++) {
        extractor(val[i]);
      }
    }
  }

  arr.forEach(extractor);
  return rolled;
}

steamrollArray([1, [2], [3, [[4]]]]);
