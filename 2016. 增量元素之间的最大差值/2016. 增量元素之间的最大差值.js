// 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。

// 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。

//

// 示例 1：

// 输入：nums = [7,1,5,4]
// 输出：4
// 解释：
// 最大差值出现在 i = 1 且 j = 2 时，nums[j] - nums[i] = 5 - 1 = 4 。
// 注意，尽管 i = 1 且 j = 0 时 ，nums[j] - nums[i] = 7 - 1 = 6 > 4 ，但 i > j 不满足题面要求，所以 6 不是有效的答案。

// 来源：力扣（LeetCode）

/**
 * @param {number[]} nums
 * @return {number}
 */
let maximumDifference = (nums) => {
  const len = nums.length;

  let ans = -1;
  let premin = nums[0];

  for (let i = 1; i < len; i++) {
    if (nums[i] > premin) {
      ans = Math.max(ans, nums[i] - premin);
    } else {
      premin = nums[i];
    }
  }
  return ans;
};
