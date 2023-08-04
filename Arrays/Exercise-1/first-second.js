//Max and Second Max

const maxAndSecondMax = (arr) => {
  let first = -1;
  let second = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }
  return [first, second];
};

const arr = [1, 2, 3, 4, 5];

const result = maxAndSecondMax(arr);
console.log(result);
