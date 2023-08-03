//Move all the zeros to the last

const nums = [8, 0, 5, 0, 0, 7];

const moveZeros = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[count], nums[i]] = [nums[i], nums[count]];
      count++;
    }
  }
  return nums;
};

const result = moveZeros(nums);

console.log(result);

/** Time & Space = o(n)
 * const moveZeros = (nums) => {
  const temp = new Array(nums.length).fill(0);
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      temp[index++] = nums[i];
    }
  }
  return temp;
};
 */
