// Frequencies in a sorted array

const frequencies = (nums) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] ? map[nums[i]]++ : (map[nums[i]] = 1);
  }
  return map;
};

const nums = [10, 10, 10, 20, 20, 30, 30, 30, 30];
const result = frequencies(nums);
console.log(result);
