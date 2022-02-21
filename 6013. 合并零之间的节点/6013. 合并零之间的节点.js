// 给你一个链表的头节点 head ，该链表包含由 0 分隔开的一连串整数。链表的 开端 和 末尾 的节点都满足 Node.val == 0 。

// 对于每两个相邻的 0 ，请你将它们之间的所有节点合并成一个节点，其值是所有已合并节点的值之和。然后将所有 0 移除，修改后的链表不应该含有任何 0 。

//  返回修改后链表的头节点 head 。

// 输入：head = [0,3,1,0,4,5,2,0]
// 输出：[4,11]
// 解释：
// 上图表示输入的链表。修改后的链表包含：
// - 标记为绿色的节点之和：3 + 1 = 4
// - 标记为红色的节点之和：4 + 5 + 2 = 11

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
  let tmp = head.next;
  tmp.next = null;
  let res = tmp;

  while (head) {
    while (head.val) {
      tmp.val += head.val;
      head = head.next;
    }
    cur = cur.next;
    head = head.next;
  }
  return res;
};
