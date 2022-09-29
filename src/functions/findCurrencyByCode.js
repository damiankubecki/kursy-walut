const findCurrencyByCode = ([...currenciesCollection], code) => {
  return currenciesCollection.find(currency => currency.code === code)
}

export { findCurrencyByCode }
