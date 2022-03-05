import React from 'react'
import styles from './OptionsList.module.scss'

const OptionsList = ({
  listName,
  currencies,
  selectedCurrency,
  otherSelectedCurrency,
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
        value={selectedCurrency.code}
      >
        <option value="default">Wybierz walutę</option>
        {currencies
          .filter(currency => !currency.used || currency !== otherSelectedCurrency)
          .map(currency => {
            return (
              <option value={currency.code}>
                {currency.code} - {currency.currency}
              </option>
            )
          })}
      </select>
    </div>
  )
}

export default OptionsList
