//Find the largest number in the array

const nums = [20, 8, 40, 10, 40];

const findLargest = (nums) => {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[index]) {
      index = i;
    }
  }
  return index;
};

const result = findLargest(nums);
console.log(result);

/**
 * Time Complexity : o(n)
 * Space Complexity: o(1)
 */
