function isTargetIn(arr, target) {
  return (
    arr
      .find((item) => item[0] <= target && item[item.length - 1] >= target)
      ?.some((item) => item === target) || false
  );
}

let arr = [
  [1, 2, 3, 4, 5],
  [10, 12, 13, 14, 15, 16],
  [19, 21, 23, 24, 25, 26],
];

console.log(isTargetIn(arr, 2));
