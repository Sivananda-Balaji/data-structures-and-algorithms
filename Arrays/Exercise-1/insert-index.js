//Array insert at index

const insertAtIndex = (arr, sizeOfArray, index, element) => {
  if (index >= 0 && index >= sizeOfArray) {
    arr[index] = element;
    return arr;
  }
  if (index >= 0 && index < sizeOfArray) {
    for (let i = arr.length; i > index; i--) {
      arr[i] = arr[i - 1];
    }
    arr[index] = element;
    return arr;
  }
};

const arr = [1, 2, 3, 4, 5];
const result = insertAtIndex(arr, arr.length, 2, 20);
console.log(result);
