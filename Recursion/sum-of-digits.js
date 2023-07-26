const sumOfDigits = (num) => {
  if (num <= 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
};

const result = sumOfDigits(253);
console.log(result);
