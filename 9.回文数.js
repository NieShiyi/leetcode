/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const str = x.toString().split("").reverse().join("");
  return x === Number(str);
};
// @lc code=end
// console.log(isPalindrome(12321))

// 进阶：你能不将整数转为字符串来解决这个问题吗？
// 不确定是多少位数，所以每次都用10来依次计算获取。多少位数就进多少次循环
var isPalindrome2 = function (x) {
  let original = x;
  let reverse = 0;
  let digit = 0;
  while (original !== 0) {
    digit = original % 10; // 依次从个位取起
    digit = reverse * 10 + digit;
    reverse = digit; // 把当前的digit作为下一次的reverse
    original = parseInt(original / 10); // 去除最后一位后的整数
  }
  if (original === 0) {
    console.log("original", digit);
    return original === x;
  }
};
console.log(isPalindrome2(543));
