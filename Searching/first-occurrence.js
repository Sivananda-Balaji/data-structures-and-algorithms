//Index of first Occurrence in Sorted in Javascript

const firstOccurrence = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      if (nums[mid - 1] === target) {
        end = mid - 1;
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

const nums = [5, 10, 10, 10, 20, 20, 20, 20, 30, 30, 30, 40, 40, 50];
const target = 20;

const result = firstOccurrence(nums, target);

console.log(result);
