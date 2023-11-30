//Move Zeros to the end

const moveZeros = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      index++;
    }
  }
  return nums;
};

const nums = [8, 0, 5, 0, 0, 7];

const result = moveZeros(nums);

console.log(result);

/**
 * const moveZeros = (nums) => {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index++] = nums[i];
    }
  }
  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};
 */
