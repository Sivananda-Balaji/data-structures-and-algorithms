//Check if a String is Subsequence of Other

const isSubsequence = (str1, str2) => {
  const len1 = str1.length;
  const len2 = str2.length;
  let index = 0;
  for (let i = 0; i < len1; i++) {
    if (str1[i] === str2[index]) {
      index++;
    }
  }
  return index === len2;
};

const str1 = "ABCDE",
  str2 = "ACD";

const result = isSubsequence(str1, str2);
console.log(result);
