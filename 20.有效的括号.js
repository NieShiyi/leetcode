/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let arr = [];
  if (s.length % 2) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    const cur = s.charAt(i);
    let idx = arr.findIndex((item, index) => {
      return obj[item] === cur && index === arr.length - 1;
    });
    if (idx > -1) {
      arr.splice(idx, 1);
    } else {
      arr.push(cur);
    }
  }
  return !arr.length;
};

// @lc code=end

// console.log(isValid("()"));
// console.log(isValid("{({})}"));
// console.log(isValid("([)]"));

// 第一次❌，没有考虑到"{[]}"这种情况
// var isValid = function (s) {
//     const obj = {
//       "(": ")",
//       "[": "]",
//       "{": "}",
//     };
//     if (s.length % 2) {
//       return false;
//     }
//     for (let i = 0; i < s.length - 1; i+=2) {
//       const cur = s.charAt(i);
//       const next = s.charAt(i + 1);
//       if (obj[cur] !== next) {
//         return false;
//       }
//     }
//     return true;
//   };
