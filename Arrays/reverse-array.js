// Reverse an array

const nums = [10, 5, 7, 30];

const reverse = (nums) => {
  let i = 0,
    j = nums.length - 1;
  while (i < j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    i++;
    j--;
  }
  return nums;
};

const result = reverse(nums);
console.log(result);
