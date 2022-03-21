import React from 'react'
import styles from './OptionsList.module.scss'

const OptionsList = ({
  listName,
  currencies,
  selectedCurrency,
  anotherSelectedCurrency,
  selectFn,
  children,
}) => {
  return (
    <div>
      <p className={styles.title}>{children}</p>
      <select
        className={styles.select}
        name={listName}
        onChange={selectFn}
        value={selectedCurrency ? selectedCurrency.code : 'default'}
      >
        <option value="default">Wybierz walutę</option>
        {currencies
          .filter(currency => !currency.used || currency !== anotherSelectedCurrency)
          .map(currency => {
            return (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.country || currency.currency}
              </option>
            )
          })}
      </select>
    </div>
  )
}

export default OptionsList
