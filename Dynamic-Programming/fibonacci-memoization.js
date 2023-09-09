//Fibonacci Numbers - (0-99)

const arr = new Array(100).fill(null);
const fibonacci = (num) => {
  if (arr[num]) {
    return arr[num];
  }
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  arr[num] = fibonacci(num - 1) + fibonacci(num - 2);
  return arr[num];
};

const result = fibonacci(3);

console.log(result);

/**
 * const fibonacci = (num) => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};
 */
