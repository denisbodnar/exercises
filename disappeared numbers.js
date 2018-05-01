var findDisappearedNumbers = function(nums) {
  var len = nums.length + 1;
  var result = [];

  for (var i = 0; i < len; i++) {
    nums[nums[i] % len - 1] += len;
  }

  for (var i = 0; i < len; i++) {
    if (nums[i] <= len) {
      result.push(i + 1);
    }
  }

  return result;
};

findDisappearedNumbers([1, 3, 3, 2, 8, 7, 4]);
