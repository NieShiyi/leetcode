/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 *
 * https://leetcode.cn/problems/remove-element/description/
 *
 * algorithms
 * Easy (59.52%)
 * Likes:    2529
 * Dislikes: 0
 * Total Accepted:    2M
 * Total Submissions: 3.2M
 * Testcase Example:  '[3,2,2,3]\n3'
 *
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素。元素的顺序可能发生改变。然后返回 nums 中与 val
 * 不同的元素的数量。
 *
 * 假设 nums 中不等于 val 的元素数量为 k，要通过此题，您需要执行以下操作：
 *
 *
 * 更改 nums 数组，使 nums 的前 k 个元素包含不等于 val 的元素。nums 的其余元素和 nums 的大小并不重要。
 * 返回 k。
 *
 *
 * 用户评测：
 *
 * 评测机将使用以下代码测试您的解决方案：
 *
 *
 * int[] nums = [...]; // 输入数组
 * int val = ...; // 要移除的值
 * int[] expectedNums = [...]; // 长度正确的预期答案。
 * ⁠                           // 它以不等于 val 的值排序。
 *
 * int k = removeElement(nums, val); // 调用你的实现
 *
 * assert k == expectedNums.length;
 * sort(nums, 0, k); // 排序 nums 的前 k 个元素
 * for (int i = 0; i < actualLength; i++) {
 * ⁠   assert nums[i] == expectedNums[i];
 * }
 *
 * 如果所有的断言都通过，你的解决方案将会 通过。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,2,2,3], val = 3
 * 输出：2, nums = [2,2,_,_]
 * 解释：你的函数函数应该返回 k = 2, 并且 nums 中的前两个元素均为 2。
 * 你在返回的 k 个元素之外留下了什么并不重要（因此它们并不计入评测）。
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,1,2,2,3,0,4,2], val = 2
 * 输出：5, nums = [0,1,4,0,3,_,_,_]
 * 解释：你的函数应该返回 k = 5，并且 nums 中的前五个元素为 0,0,1,3,4。
 * 注意这五个元素可以任意顺序返回。
 * 你在返回的 k 个元素之外留下了什么并不重要（因此它们并不计入评测）。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= nums.length <= 100
 * 0 <= nums[i] <= 50
 * 0 <= val <= 100
 *
 *
 */

// @lc code=start
/**
 * 1. 如果直接在数组上删除，数组长度改变
 * 不应该是至少遍历一遍数组中所有元素 时间O(n)，空间O(1)?
 * 数组的splice这个方法，会导致删除元素后的所有的元素都往前移动，可以算时间复杂度是O(n)
 * 本来splice方法就是原地修改数组，但是会返回一个新的数组(被删除的元素)，即使不使用这个返回值，也会有轻微的额外开销
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function (nums, val) {
  let len = nums.length;
  for (let index = 0; index < len; index++) {
    let num = nums[index];
    if (num == val) {
      nums.splice(index, 1);
      len = nums.length;
      index--;
    }
  }
  return len;
};

// 官方解法，双指针
// 最坏的情况下，左右指针各遍历一次，right指针读一遍，left指针写一遍，一共2遍
var removeElement2 = function(nums, val) {
    const n = nums.length;
    let left = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] !== val) { // left就是在计算不等于值的数
            nums[left] = nums[right];
            left++;
        }
    }
    return left;
};

// 官方解法，双指针优化
// 这样的方法两个指针在最坏的情况下合起来只遍历了数组一次。与方法一不同的是，方法二避免了需要保留的元素的重复赋值操作。
var removeElement = function(nums, val) {
    let left = 0, right = nums.length;
    while (left < right) {
        if (nums[left] === val) {
            nums[left] = nums[right - 1];
            right--;
        } else {
            left++;
        }
    }
    return left;
};

// @lc code=end