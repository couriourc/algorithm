/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let slow = head;
  let fast = slow.next;
  let res;
  let tmp;
  while (fast) {
    while (fast.val !== 0) {
      slow.val += fast.val;
      fast = fast.next;
    }
    if (!tmp) {
      tmp = slow;
      tmp.next = null;
      res = tmp;
    } else {
      tmp.next = slow;
      tmp = tmp.next;
      tmp.next = null;
    }
    slow = fast;
    fast = slow.next;
  }
  return res;
};
