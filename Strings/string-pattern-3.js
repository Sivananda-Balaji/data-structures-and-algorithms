// String Pattern - III - if pattern is unique

const patternIndexes = (str, pattern) => {
  const n = str.length;
  const m = pattern.length;
  const answer = [];
  let i = 0;
  while (i <= n - m) {
    let j;
    for (j = 0; j < m; j++) {
      if (str[i + j] !== pattern[j]) {
        break;
      }
    }
    if (j === m) {
      answer.push(i);
    }
    if (j === 0) {
      i++;
    } else {
      i += j;
    }
  }
  return answer;
};

const str = "ABCACABCD",
  pattern = "ABCD";

const result = patternIndexes(str, pattern);
console.log(result);
