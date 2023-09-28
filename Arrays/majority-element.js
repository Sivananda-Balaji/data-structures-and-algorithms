//Majority Element in a array (additional cases covered)

var majorityElement = function (nums) {
  let majority = nums[0];
  let vote = 1;
  for (let i = 1; i < nums.length; i++) {
    if (vote === 0) {
      majority = nums[i];
      vote = 1;
    } else if (majority === nums[i]) {
      vote--;
    } else {
      vote--;
    }
  }
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === majority) {
      count++;
    }
  }
  if (count > Math.floor(nums.length / 2)) {
    return majority;
  } else {
    return -1;
  }
};

const nums = [8, 3, 4, 8, 8];

const result = majorityElement(nums);

console.log(result);
