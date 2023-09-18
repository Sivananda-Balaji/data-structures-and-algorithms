//Linear Search - good for unsorted data

const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

const nums = [20, 80, 40, 70, 10, 30, 50];
const target = 30;

const result = linearSearch(nums, target);
console.log(result);
