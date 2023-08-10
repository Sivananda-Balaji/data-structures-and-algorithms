// String Pattern - I

const isPatternMatch = (text, pattern) => {
  const n = text.length;
  const m = pattern.length;

  for (let i = 0; i <= n - m; i++) {
    let j;
    for (j = 0; j < m; j++) {
      if (text[i + j] !== pattern[j]) {
        break;
      }
    }
    if (j === m) {
      return true;
    }
  }
  return false;
};

const text = "abcdabfabeg";
const pattern = "abe";

const result = isPatternMatch(text, pattern);

console.log(result);
