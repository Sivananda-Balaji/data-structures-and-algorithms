//Is Array Sorted

const isSorted = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
};

const nums = [10, 20, 20, 40, 50];

const result = isSorted(nums);

console.log(result);
