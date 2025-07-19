/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 *
 * https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (51.43%)
 * Likes:    3133
 * Dislikes: 0
 * Total Accepted:    1.8M
 * Total Submissions: 3.5M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [1], n = 1
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 *
 *
 * 进阶：你能尝试使用一趟扫描实现吗？
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 先创建虚拟节点
  let ret = new ListNode(0, head),
    slow = (fast = ret);
  // fast指针快走n步
  while (n--) fast = fast.next;
  // 然后一起走，直到fast.next走到null的时候，slow也就走到了删除节点的前一个节点
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // 删除节点
  slow.next = slow.next.next;
  // 记得最后要返回虚拟节点的下一个节点才是头节点
  return ret.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end

// TODO 自己写的，但是不知道该如何返回头指针
var removeNthFromEnd = function (head, n) {
  let len = 1;
  if (!head) return head;
  let tail = head;
  while (tail.next !== null) {
    len++;
    tail = tail.next;
  }
  let delIndex = len - n;
  let i = 0;
  while (i < delIndex - 1) {
    i++;
    head = head.next;
  }
  head.next = head.next.next;
  return head; // 这个链表元素是删除了，但是返回的是删除前一个节点，不是头节点
};

// 快慢指针方式
var removeNthFromEnd = function (head, n) {
  // 先创建虚拟节点
  let ret = new ListNode(0, head),
    slow = (fast = ret);
  // fast指针快走n步
  while (n--) fast = fast.next;
  // 然后一起走，直到fast.next走到null的时候，slow也就走到了删除节点的前一个节点
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  // 删除节点
  slow.next = slow.next.next;
  // 记得最后要返回虚拟节点的下一个节点才是头节点
  return ret.next;
};
