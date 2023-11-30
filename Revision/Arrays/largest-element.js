//Largest Element in an Array

const largestElement = (nums) => {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[index]) {
      index = i;
    }
  }
  return index;
};

const nums = [20, 8, 40, 10, 40, 5, 60];

const result = largestElement(nums);

console.log(result);
