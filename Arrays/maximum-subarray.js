//Maximum Sum subarray in JS

const maxSubarray = (nums) => {
  let answer = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i]);
    answer = Math.max(max, answer);
  }
  return answer;
};

const nums = [2, 3, -8, 7, -1, 2, 3];

const result = maxSubarray(nums);

console.log(result);

/**
 * const maxSubarray = (nums) => {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
    }
    max = Math.max(sum, max);
  }
  return max;
};

 */
