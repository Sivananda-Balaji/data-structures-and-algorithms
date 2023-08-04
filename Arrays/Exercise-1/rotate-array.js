//Rotate Array

const rotateArr = (arr, rotate) => {
  const reverseArr = (start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };
  reverseArr(0, arr.length - 1);
  reverseArr(0, rotate - 1);
  reverseArr(rotate, arr.length - 1);
  return arr;
};

const arr = [1, 2, 3, 4, 5];
const result = rotateArr(arr, 2);
console.log(result);
