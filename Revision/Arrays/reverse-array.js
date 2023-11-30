//Reverse An Array

const reverseArray = (nums) => {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
};

const nums = [10, 5, 20, 30, 50];

const result = reverseArray(nums);

console.log(result);
