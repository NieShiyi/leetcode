/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode.cn/problems/sqrtx/description/
 *
 * algorithms
 * Easy (38.52%)
 * Likes:    1680
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 2.7M
 * Testcase Example:  '4'
 *
 * 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
 *
 * 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。
 *
 * 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 4
 * 输出：2
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 8
 * 输出：2
 * 解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
/**
 * 这个解法，对于1的要单独处理，可以优化成如下
 * @param {number} x
 * @return {number}
 */

var mySqrt1 = function (x) {
  let l = 0;
  let r = x;
  let m = l + Math.floor(x / 2);
  if (x == 1) return 1;
  while (m !== l) {
    if (m * m > x) {
      r = m;
    } else {
      l = m;
    }
    m = l + Math.floor((r - l) / 2);
  }
  return m;
};

/**
 * 这个更好，覆盖了x是0和1的情况
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x, ans = -1;
    
    // 使用二分查找，查找平方根
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);  // 计算中间位置
        
        if (mid * mid <= x) {
            ans = mid;  // 记录当前可能的平方根
            l = mid + 1;  // 搜索右半边，寻找更大的平方根
        } else {
            r = mid - 1;  // 搜索左半边，mid 太大
        }
    }
    
    return ans;  // 返回最终找到的最大平方根
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mySqrt;
// @after-stub-for-debug-end
