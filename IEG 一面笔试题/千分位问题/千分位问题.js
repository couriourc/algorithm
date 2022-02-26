function thousendDot(nums) {
  return nums.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
}
