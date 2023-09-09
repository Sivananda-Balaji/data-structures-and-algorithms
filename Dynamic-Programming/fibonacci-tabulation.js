//Fibonacci Tabulation

const fibonacci = (num) => {
  const dp = new Array(num + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[num];
};

const result = fibonacci(6);
console.log(result);

/**
 * const fibonacci = (num) => {
  let answer = 0;
  if (num === 0 || num == 1) {
    return num;
  }
  let first = 0;
  let second = 1;
  for (let i = 2; i <= num; i++) {
    answer = first + second;
    first = second;
    second = answer;
  }
  return answer;
};
 */
