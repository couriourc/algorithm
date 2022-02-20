/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits: Array<number>): boolean {
  // 1. 0
  // 2.10 11
  let i: number = 0;
  let len: number = bits.length;

  while (i < len - 1) {
    i += bits[i] + 1;
  }

  return len - 1 === i;
};

let bitsExample = [1, 0, 0];

console.log(bitsExample);
