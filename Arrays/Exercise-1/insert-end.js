//Array insert at end

const insertAtEnd = (arr, sizeOfArray, element) => {
  arr[sizeOfArray] = element;
  return arr;
};

const arr = [1, 2, 3, 4, 5];
const result = insertAtEnd(arr, arr.length, 20);
console.log(result);
