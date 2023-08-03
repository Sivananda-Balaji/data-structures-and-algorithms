// Second largest number

const nums = [12, 35, 1, 10, 34, 1];

const secondLargest = (nums) => {
  let first = 0,
    second = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[first]) {
      second = first;
      first = i;
    } else if (nums[i] < nums[first]) {
      if (nums[i] > nums[second] || second === -1) {
        second = i;
      }
    }
  }
  return second;
};

const result = secondLargest(nums);
console.log(result);
