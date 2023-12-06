//Merge Sort

const merge = (nums, start, mid, end) => {
  const temp = [];
  let i = start;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= end) {
    if (nums[i] < nums[j]) {
      temp[k++] = nums[i++];
    } else {
      temp[k++] = nums[j++];
    }
  }
  while (i <= mid) {
    temp[k++] = nums[i++];
  }
  while (j <= end) {
    temp[k++] = nums[j++];
  }
  k = 0;
  for (let m = start; m <= end; m++) {
    nums[m] = temp[k++];
  }
};

const mergeSort = (nums, start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(nums, start, mid);
    mergeSort(nums, mid + 1, end);
    merge(nums, start, mid, end);
  }
  return nums;
};

const sortArray = (nums) => {
  const len = nums.length - 1;
  return mergeSort(nums, 0, len);
};

const nums = [6, 1, 4, 2, 8, 5, 3];

console.log(sortArray(nums));
