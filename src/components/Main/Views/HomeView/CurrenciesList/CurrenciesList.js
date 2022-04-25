import React from 'react'
import styles from './CurrenciesList.module.scss'
import CurrencyItem from './CurrencyItem/CurrencyItem'

const CurrenciesList = ({ currenciesCollection }) => {
  const sortedCurrencies = currenciesCollection.sort((a, b) =>
    a.category > b.category ? 1 : -1
  )
  return (
    <div className={styles.wrapper}>
      {sortedCurrencies.map(currency => {
        return <CurrencyItem key={currency.code} {...currency} />
      })}
    </div>
  )
}

export default CurrenciesList
