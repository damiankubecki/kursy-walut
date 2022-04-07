import React from 'react'
import styles from './CurrenciesList.module.scss'
import CurrencyItem from './CurrencyItem/CurrencyItem'

const CurrenciesList = ({ currencies }) => {
  currencies = currencies
    ? currencies.sort((a, b) => (a.category > b.category ? 1 : -1))
    : null
  return (
    <div className={styles.wrapper}>
      {currencies
        ? currencies.map(currency => {
            return <CurrencyItem key={currency.code} {...currency} />
          })
        : null}
    </div>
  )
}

export default CurrenciesList
