/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // 1. 0 如果是 0 走一步
  // 2.10 11 如果是 1 走 一步
  let i = 0;
  let len = bits.length;

  while (i < len - 1) {
    i += bits[i] + 1;
  }

  return len - 1 === i;
};

module.exports = { isOneBitCharacter };
