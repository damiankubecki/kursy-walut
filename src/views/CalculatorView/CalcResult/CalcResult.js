import React from 'react'
import styles from './CalcResult.module.scss'

const CalcResult = ({
  rateDate,
  sum,
  resultValue,
  exchangeRate,
  fromCurrency,
  toCurrency,
}) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.amounts}>
        <span className={styles.leftSection}>
          {sum} {fromCurrency.code}
        </span>
        <span className={styles.equalMark}> = </span>
        <span className={styles.rightSection}>
          {resultValue} {toCurrency.code}
        </span>
      </p>
      <p className={styles.note}>
        1 {fromCurrency.code} = {exchangeRate} {toCurrency.code},{' '}
        <span className={styles.date}>
          według średniego kursu NBP z dnia {rateDate}
        </span>
      </p>
    </div>
  )
}

export default CalcResult
