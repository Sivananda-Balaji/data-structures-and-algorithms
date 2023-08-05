//Buy and Sell Stock - I

const buyAndSell = (prices) => {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const difference = prices[i + 1] - prices[i];
    if (difference > 0) {
      max += difference;
    }
  }
  return max;
};

const prices = [1, 5, 3, 1, 2, 8];

const profit = buyAndSell(prices);
console.log(profit);
