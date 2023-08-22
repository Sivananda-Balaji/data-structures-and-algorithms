//Maximum sum of sub-array

const maximumSum = (nums, k) => {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let j = k;
  let sum = maxSum;
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[j - k];
    j++;
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};

const nums = [1, 8, 30, -5, 20, 7],
  k = 4;

const result = maximumSum(nums, k);
console.log(result);

/**
 * const maximumSum = (nums, k) => {
  let maxSum = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let j = 0;
    let sum = 0;
    while (j < k) {
      sum += nums[i + j];
      j++;
    }
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};
 */
