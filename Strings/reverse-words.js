//Reverse words in a string

const reverseWords = (str) => {
  let answer = " ";
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === " ") {
      answer = temp + answer;
      temp = "";
    }
    temp = str[i] + temp;
  }
  return answer + temp.trim();
};

const str = "I Love Coding";
const result = reverseWords(str);

console.log(result);

/**
 * const reverseWords = (str) => {
  const answer = str.split(" ").reverse().join(" ");
  return answer;
};
 */
