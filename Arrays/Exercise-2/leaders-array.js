// Leaders in array

const leadersInArray = (nums) => {
  const answer = [];
  let largest = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] >= largest) {
      answer.push(largest);
      largest = nums[i];
    }
  }
  answer.push(largest);
  return answer.reverse();
};

const nums = [16, 17, 4, 3, 5, 2];

const result = leadersInArray(nums);

console.log(result);

/**
 * const leadersInArray = (nums) => {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i],
      add = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (val < nums[j]) {
        add = false;
        break;
      }
    }
    if (add) {
      answer.push(val);
    }
  }
  return answer;
};
 */
