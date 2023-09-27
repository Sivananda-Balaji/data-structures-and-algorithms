//Kth Smallest Element in JS

const KSmallest = (nums, k) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    const pIndex = partition(nums, start, end);
    if (pIndex === k - 1) {
      return nums[pIndex];
    } else if (pIndex > k - 1) {
      end = pIndex - 1;
    } else {
      start = pIndex + 1;
    }
  }
  return -1;
};

const partition = (nums, start, end) => {
  let pivot = nums[end];
  let p = start;
  for (let i = start; i < end; i++) {
    if (nums[i] < pivot) {
      [nums[i], nums[p]] = [nums[p], nums[i]];
      p++;
    }
  }
  [nums[end], nums[p]] = [nums[p], nums[end]];
  return p;
};

const nums = [10, 5, 30, 12];

const result = KSmallest(nums, 2);

console.log(result);
