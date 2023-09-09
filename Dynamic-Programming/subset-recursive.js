//Subset Sum Problem (Recursive Solution)

const isSubset = (nums, sum, n) => {
  if (n === 0) {
    return sum === 0;
  }
  return isSubset(nums, sum, n - 1) + isSubset(nums, sum - nums[n - 1], n - 1);
};

const nums = [10, 20, 15];
const sum = 30;
const n = nums.length;
const res = isSubset(nums, sum, n);

console.log(res);
