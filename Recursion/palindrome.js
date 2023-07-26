const palindrome = (str, start, end) => {
  if (start >= end) {
    return true;
  }
  if (str[start] !== str[end]) {
    return false;
  }
  return palindrome(str, start + 1, end - 1);
};

const str = "madam";
const result = palindrome(str, 0, str.length - 1);

console.log(result);
