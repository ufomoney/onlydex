export const changeToBNB = function(currency) {
  const newCurrency = { ...currency }
  if (newCurrency?.symbol === 'ETH') {
    newCurrency.symbol = 'BNB'
    return newCurrency
  } else {
    return currency
  }
}
