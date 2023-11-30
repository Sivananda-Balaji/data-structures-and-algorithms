//Rotate Left by One

const rotateOne = (nums) => {
  const first = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    nums[index++] = nums[i];
  }
  nums[index] = first;
  return nums;
};

const nums = [1, 2, 3, 4, 5];

const result = rotateOne(nums);

console.log(result);
