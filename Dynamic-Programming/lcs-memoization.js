//1143. Longest Common Subsequence

var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = -1;
    }
  }
  const lcsLength = findLCSLength(text1, text2, m, n, dp);
  return lcsLength;
};

const findLCSLength = (text1, text2, m, n, dp) => {
  if (m === 0 || n === 0) {
    return 0;
  }
  if (dp[m][n] !== -1) {
    return dp[m][n];
  }
  if (text1[m - 1] === text2[n - 1]) {
    dp[m][n] = 1 + findLCSLength(text1, text2, m - 1, n - 1, dp);
  } else {
    const lcs1 = findLCSLength(text1, text2, m - 1, n, dp);
    const lcs2 = findLCSLength(text1, text2, m, n - 1, dp);
    dp[m][n] = Math.max(lcs1, lcs2);
  }
  return dp[m][n];
};

const text1 = "abcde",
  text2 = "ace";

const result = longestCommonSubsequence(text1, text2);

console.log(result);
