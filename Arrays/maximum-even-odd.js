//Maximum Length Even Odd Subarray in JS

const maximumEvenOdd = (nums) => {
  let length = 0;
  let current = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i - 1] % 2 !== 0) {
      current++;
    } else if (nums[i] % 2 !== 0 && nums[i - 1] % 2 === 0) {
      current++;
    } else {
      current = 1;
    }
    length = Math.max(current, length);
  }
  return length;
};

const nums = [10, 12, 14, 7, 8];
const result = maximumEvenOdd(nums);

console.log(result);

/**
 * const maximumEvenOdd = (nums) => {
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % 2 === 0 && nums[j - 1] % 2 !== 0) {
        current++;
      } else if (nums[j] % 2 !== 0 && nums[j - 1] % 2 === 0) {
        current++;
      } else {
        break;
      }
    }
    length = Math.max(current, length);
  }
  return length;
};
 */
