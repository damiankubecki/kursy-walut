const calculateResult = ({ fromCurrency, toCurrency, sum }) => {
  const fromRate = fromCurrency?.mid
  const toRate = toCurrency?.mid

  if ((!fromRate && !toRate && !sum) || (!sum && (!fromRate || !toRate)))
    return { error: 'Nie uzupełniono formularza' }
  if (!fromRate && !toRate) return { error: 'Nie uzupełniono sekcji walut' }
  if (!sum) return { error: 'Nie uzupełniono kwoty' }
  if (!fromRate) return { error: 'Nie wskazano posiadanej waluty' }
  if (!toRate) return { error: 'Nie wskazano waluty, na którą mam przeliczyć' }

  const exchangeRate = fromRate / toRate
  const resultValue = sum * exchangeRate
  return { exchangeRate, resultValue }
}

export { calculateResult }
