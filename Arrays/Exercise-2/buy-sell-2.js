//Buy And Sell - II

const buyAndSell = (prices) => {
  let min = Infinity;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      const profit = prices[i] - min;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 4];

const profit = buyAndSell(prices);
console.log(profit);
