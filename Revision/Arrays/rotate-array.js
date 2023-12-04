//Rotate Array

const rotateArr = (nums, k) => {
  k = k % nums.length;
  const reverse = (a, b) => {
    while (a < b) {
      [nums[a], nums[b]] = [nums[b], nums[a]];
      a++;
      b--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

rotateArr(nums, 3);

console.log(nums);
