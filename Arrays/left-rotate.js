//Rotate left by one

const nums = [1, 2, 3, 4, 5];

const rotateLeft = (nums) => {
  const rotateVal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i - 1] = nums[i];
  }
  nums[nums.length - 1] = rotateVal;
  return nums;
};

const result = rotateLeft(nums);
console.log(result);
