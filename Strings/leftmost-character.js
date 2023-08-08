//Leftmost Repeating Character

const leftmostCharacter = (str) => {
  let answer = -1;
  const countArr = new Array(256).fill(false);
  for (let i = str.length - 1; i >= 0; i--) {
    if (countArr[str.charCodeAt(i)]) {
      answer = i;
    }
    countArr[str.charCodeAt(i)] = true;
  }
  return answer;
};

const str = "zxcksforgeeks";
const result = leftmostCharacter(str);
console.log(result);

/**
 * const leftmostCharacter = (str) => {
  const countArr = new Array(256).fill(0);
  for (let i = 0; i < str.length; i++) {
    countArr[str.charCodeAt(i)]++;
  }
  for (let i = 0; i < str.length; i++) {
    if (countArr[str.charCodeAt(i)] > 1) {
      return i;
    }
  }
  return -1;
};
 */
