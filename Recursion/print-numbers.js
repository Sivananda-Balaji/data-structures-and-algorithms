const reverse = (num) => {
  if (num <= 0) {
    return;
  }
  console.log(num);
  reverse(num - 1);
};

reverse(5);

console.log("-------");

const printNum = (num) => {
  if (num < 1) {
    return;
  }
  printNum(num - 1);
  console.log(num);
};

printNum(5);
