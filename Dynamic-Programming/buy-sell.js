//Buy and Sell Stock

var maxProfit = function (prices) {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      maxProfit = Math.max(profit, maxProfit);
    }
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

const res = maxProfit(prices);

console.log(res);
