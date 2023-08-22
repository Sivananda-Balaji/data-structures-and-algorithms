//Maximum consecutive 1s in JS

const maxOnes = (nums) => {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = count > maxCount ? count : maxCount;
      count = 0;
    }
  }
  return maxCount;
};

const nums = [0, 0, 1, 1, 0, 1, 1, 1, 0, 0];
const result = maxOnes(nums);
console.log(result);
