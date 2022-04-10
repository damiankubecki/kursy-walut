import React from 'react'
import PropTypes from 'prop-types'
import styles from './CurrenciesSelectList.module.scss'

const CurrenciesSelectList = ({
  listName,
  currenciesCollection,
  selectedCurrency,
  children,
  calculator = {
    anotherSelectedCurrency: null,
  },
  ...props
}) => {
  currenciesCollection.sort((a, b) => a.category - b.category)
  const { anotherSelectedCurrency } = calculator
  return (
    <div className={styles.wrapper}>
      {children && <p className={styles.title}>{children}</p>}
      <select
        className={styles.select}
        name={listName}
        value={selectedCurrency ? selectedCurrency.code : 'default'}
        {...props}
      >
        <option value="default">Wybierz walutę</option>
        {calculator ? (
          <>
            {currenciesCollection
              .filter(
                currency => !currency.used || currency !== anotherSelectedCurrency
              )
              .map(currency => (
                <option key={currency.code} value={currency.code}>
                  {currency.code} - {currency.country || currency.currency}
                </option>
              ))}
          </>
        ) : (
          <>
            {currenciesCollection.map(currency => (
              <option key={currency.code} value={currency.code}>
                {currency.code} - {currency.country || currency.currency}
              </option>
            ))}
          </>
        )}
      </select>
    </div>
  )
}

CurrenciesSelectList.propTypes = {
  listName: PropTypes.string,
  currenciesCollection: PropTypes.array.isRequired,
  select: PropTypes.func,
  children: PropTypes.string,
  calculator: PropTypes.object,
}

export default CurrenciesSelectList
