//String Pattern - II

const patternIndex = (str, pattern) => {
  const n = str.length;
  const m = pattern.length;
  const indexes = [];
  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m) {
      if (str[i + j] !== pattern[j]) {
        break;
      }
      j++;
    }
    if (j === m) {
      indexes.push(i);
    }
  }
  return indexes;
};

const str = "ABCABCD",
  pattern = "ABCD";

const result = patternIndex(str, pattern);
console.log(result);
