//Count Occurrences in Sorted in Javascript

const countOccurrence = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let first = -1;
  let last = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      if (nums[mid - 1] === target) {
        high = mid - 1;
      } else {
        first = mid;
        break;
      }
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (first === -1) {
    return first;
  }
  (low = 0), (high = nums.length - 1);
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      if (nums[mid + 1] === target) {
        low = mid + 1;
      } else {
        last = mid;
        break;
      }
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return last - first + 1;
};

const nums = [10, 10, 20, 20, 20, 30, 50, 50];

const result = countOccurrence(nums, 20);

console.log(result);
