//Rotate Array

const rotateArr = (arr, d, n) => {
  const small = arr.slice(0, d);
  let index = 0;
  for (let i = d; i < arr.length; i++) {
    arr[index++] = arr[i];
  }
  for (let i = 0; i < small.length; i++) {
    arr[index++] = small[i];
  }
  return arr;
};

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const result = rotateArr(arr, 3, arr.length);

console.log(result);
