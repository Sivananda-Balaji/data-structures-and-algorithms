// String Pattern - IV - KMP Algorithm

const patternMatch = (str, pattern) => {
  const n = str.length;
  const lps = buildLPS(pattern);
  let i = 0;
  let j = 0;
  const answer = [];
  while (i < n) {
    if (str[i] === pattern[j]) {
      i++;
      j++;
    }
    if (j === pattern.length) {
      answer.push(i - j);
      j = lps[j - 1];
    } else if (i < n && str[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return answer;
};

const buildLPS = (pattern) => {
  const arr = [0];
  let len = 0;
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      arr[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = arr[len - 1];
      } else {
        arr[i] = 0;
        i++;
      }
    }
  }
  return arr;
};

const str = "sadbutsad",
  pattern = "sad";

const result = patternMatch(str, pattern);

console.log(result);
