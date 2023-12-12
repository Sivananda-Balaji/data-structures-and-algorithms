// Max and Second Max in an array

const largestAndSecondLargest = (sizeOfArray, arr) => {
  let first = arr[0];
  let second = -1;
  for (let i = 1; i < sizeOfArray; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return [first, second];
};

const arr = [2, 1, 2];

const result = largestAndSecondLargest(arr.length, arr);

console.log(result);
