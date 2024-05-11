/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = s.split("");
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    let curValue = obj[arr[i]];
    // 最后剩余的一位, 也可以在nextValue变成obj[nextChart]||0,便可省略以下最后一步的判断
    if (i + 1 === arr.length) {
      num += curValue;
      return num;
    }
    let nextValue = obj[arr[i + 1]];
    if (curValue >= nextValue) {
      num += curValue;
    } else {
      num += nextValue - curValue;
      i++;
    }
  }
  return num;
};
// @lc code=end
// const s = "LVIII";
const s = "MCMXCIV";
// console.log(romanToInt(s));

var romanToInt1 = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  const orderArr = [
    "CM",
    "CD",
    "XC",
    "XL",
    "IX",
    "IV",
    "M",
    "D",
    "C",
    "L",
    "X",
    "V",
    "I",
  ];
  let arr = [];
  for (let i = 0; i < orderArr.length; i++) {
    const chart = orderArr[i];
    let reg = new RegExp(chart, "g");
    let matches = s.match(reg);
    if (matches?.length) {
      let newArr = new Array(matches.length).fill(chart);
      arr = arr.concat(newArr);
      s = s.replace(reg, "");
    }
    if (!s.length) {
      return arr.reduce((previous, current) => {
        return previous + obj[current];
      }, 0);
    }
  }
};

// 可以把对象和数组合并成一个对象数组或者是二位数组，还可以直接在遍历的时候累加， 这些都可以节约存储空间
var romanToInt2 = function (s) {
  const orderArr = [
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4],
    ["M", 1000],
    ["D", 500],
    ["C", 100],
    ["L", 50],
    ["X", 10],
    ["V", 5],
    ["I", 1],
  ];
  let num = 0;
  for (let i = 0; i < orderArr.length; i++) {
    const chart = orderArr[i][0];
    const value = orderArr[i][1];
    let reg = new RegExp(chart, "g");
    let matches = s.match(reg);
    if (matches?.length) {
      num += matches.length * value;
      s = s.replace(reg, "");
    }
    if (!s.length) {
      return num;
    }
  }
};
// console.log(romanToInt2(s));

// 根据顺序判断是否是特殊情况,如果存在特殊值，就相减后赋值，然后i++。
var romanToInt3 = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = s.split("");
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    let curChart = arr[i];
    let curValue = obj[curChart];
    // 最后剩余的一位
    if (i + 1 === arr.length) {
      num += curValue;
      return num;
    }
    let nextChart = arr[i + 1];
    let nextValue = obj[nextChart];
    if (curValue >= nextValue) {
      num += curValue;
    } else {
      num += nextValue - curValue;
      i++;
    }
  }
  return num;
};
// console.log(romanToInt3(s));

// 学习其他解决方案
// 根据顺序判断是否是特殊情况，比起我写的3来说代码更简单，特殊情况下直接减值，正常情况下加值
var romanToInt4 = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let value = 0;
  for (let i = 0; i < s.length; i += 1) {
    // console.log(symbols[s[i + 1]]); // 注意：最后一位可能是undefined，依然判断后会相加
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};
console.log(romanToInt4(s));
