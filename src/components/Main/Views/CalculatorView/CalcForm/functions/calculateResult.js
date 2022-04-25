const calculateResult = ({ fromCurrency, toCurrency, sum }) => {
  const fromRate = fromCurrency?.mid
  const toRate = toCurrency?.mid

  if (!fromRate || !toRate || !sum) throw new Error('Cannot calculate result')

  const exchangeRate = fromRate / toRate
  const resultValue = sum * exchangeRate
  return { exchangeRate, resultValue }
}

export { calculateResult }
