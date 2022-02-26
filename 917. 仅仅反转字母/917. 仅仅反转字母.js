/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  s = s.split("");
  let [start, end] = [0, s.length - 1];

  let isNotChar = (target) => {
    return /[^a-zA-Z]/.test(target);
  };
  while (start < end) {
    while (isNotChar(s[start])) start++;
    while (isNotChar(s[end])) end--;
    if (start > end) break;
    [s[start], s[end]] = [s[end], s[start]];
    start++, end--;
  }
  return s.join("");
};
