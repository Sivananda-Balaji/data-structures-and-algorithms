//Check for Anagram

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const countArr = new Array(256).fill(0);
  for (let i = 0; i < str1.length; i++) {
    countArr[str1.charCodeAt(i)]++;
    countArr[str2.charCodeAt(i)]--;
  }
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] !== 0) {
      return false;
    }
  }
  return true;
};

const str1 = "listen",
  str2 = "silent";
const result = isAnagram(str1, str2);

console.log(result);

/**
 * const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1Map = {};
  for (let i = 0; i < str1.length; i++) {
    const val = str1[i];
    str1Map[val] ? str1Map[val]++ : (str1Map[val] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    const val = str2[i];
    str1Map[val] === 1 ? delete str1Map[val] : str1Map[val]--;
  }
  return Object.keys(str1Map).length === 0;
};
 */
