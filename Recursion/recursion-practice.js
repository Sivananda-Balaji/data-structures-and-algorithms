const printTimes = (n) => {
  if (n <= 0) {
    return;
  }
  console.log("Welcome to Sin City!!");
  printTimes(n - 1);
};

printTimes(5);

console.log("-------------");

const printNumbers = (n) => {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumbers(n - 1);
  console.log(n);
};

printNumbers(5);

console.log("-------------");

const printBinary = (n) => {
  if (n == 0) {
    return;
  }
  printBinary(Math.floor(n / 2));
  console.log(n % 2);
};

printBinary(5);
