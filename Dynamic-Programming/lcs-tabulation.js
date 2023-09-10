//1143. Longest Common Subsequence

var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length;
  let n = text2.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      dp[i][j] = 0;
    }
  }
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      } else if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[1][j - 1]);
      }
    }
  }
  return dp[m][n];
};

const text1 = "bd",
  text2 = "abcd";

const result = longestCommonSubsequence(text1, text2);

console.log(result);
