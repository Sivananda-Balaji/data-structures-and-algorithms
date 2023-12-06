// Quick Sort

const partition = (nums, start, end) => {
  let pIndex = start;
  let pivot = nums[end];
  for (let i = start; i < end; i++) {
    if (nums[i] < pivot) {
      [nums[i], nums[pIndex]] = [nums[pIndex], nums[i]];
      pIndex++;
    }
  }
  [nums[end], nums[pIndex]] = [nums[pIndex], nums[end]];
  return pIndex;
};

const quickSort = (nums, start, end) => {
  if (start < end) {
    const pIndex = partition(nums, start, end);
    quickSort(nums, start, pIndex - 1);
    quickSort(nums, pIndex + 1, end);
  }
  return nums;
};

const sortArray = (nums) => {
  const len = nums.length - 1;
  return quickSort(nums, 0, len);
};

const nums = [6, 1, 4, 2, 8, 5, 3];

const result = sortArray(nums);

console.log(result);

/**
 * const sortArray = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
};
 */
