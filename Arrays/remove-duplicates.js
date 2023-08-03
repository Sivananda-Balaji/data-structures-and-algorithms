// Remove Duplicate Elements from the array

const nums = [1, 2, 2, 3, 4, 4, 4, 5, 5];

const removeDuplicates = (nums) => {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index - 1] !== nums[i]) {
      nums[index++] = nums[i];
    }
  }
  nums.length = index;
  return nums;
};

const result = removeDuplicates(nums);

console.log(result);
