// Check if array os sorted or not

const nums = [10, 35, 60, 85, 85, 90];

const isSorted = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return false;
    }
  }
  return true;
};

const result = isSorted(nums);
console.log(result);
