//Binary Search  - good for sorted array

const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};

const nums = [10, 20, 30, 40, 50, 60];

const target = 30;

const result = binarySearch(nums, target);

console.log(result);
