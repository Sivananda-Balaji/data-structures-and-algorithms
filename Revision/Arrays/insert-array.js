//Array insert at index

const insertAtIndex = (nums, index, element) => {
  let i = index;
  while (element !== undefined) {
    let temp = nums[i];
    nums[i] = element;
    i++;
    element = temp;
  }

  return nums;
};

const nums = [15, 20, 40, 55, 70];

const result = insertAtIndex(nums, 4, 90);

console.log(result);
