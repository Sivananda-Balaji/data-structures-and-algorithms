//Index of last Occurrence in Sorted in JS

const lastOccurrence = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      if (nums[mid + 1] === target) {
        start = mid + 1;
      } else {
        return mid;
      }
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

const nums = [10, 15, 20, 20, 40, 40];

const result = lastOccurrence(nums, 20);

console.log(result);
