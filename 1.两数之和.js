/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const preNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const nextNum = nums[j];
      if (preNum + nextNum === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// console.log(twoSum([4, 5, 11, 15], 9));

// @lc code=end

// 使用map或者object，只循环一遍O(n).
var twoSum2 = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(target - num)) {
      return [map.get(target - num), i];
    }
    map.set(num, i);
  }
};
// console.log(twoSum2([2, 2, 11, 15], 4));
