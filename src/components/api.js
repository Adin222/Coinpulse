export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const SingleChart = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`;
