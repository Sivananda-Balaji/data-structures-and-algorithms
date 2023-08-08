// Check Palindrome

const isPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

const result = isPalindrome("madam");
console.log(result);
