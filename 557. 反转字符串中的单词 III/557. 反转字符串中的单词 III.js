/**
 * @param {string} s
 * @return {string}
 */

let reverse = (target) => {
  let arr = [...target];
};

var reverseWords = function (s) {
  let fast = 0;
  let slow = 0;
  let flag = " ";
  let res = "";
  while (fast < s.length) {
    if (s[fast] == flag) {
      //  遇到空格 从 slow 到 fast 开始反转
      let _ = s.slice(slow, fast).split("").reverse().join("");
      res += `${_} `;
      slow = fast + 1;
    }
    fast++;
  }
  return res;
};
reverseWords("Let's take LeetCode contest");
